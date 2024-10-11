// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Escrow is ReentrancyGuard {
    enum State {
        Created,
        Funded,
        DeliveryRequested,
        Delivered,
        Completed,
        Refunded,
        Disputed
    }

    struct Agreement {
        address buyer;
        address seller;
        address arbitrator;
        address verifier;
        uint amount;
        string description;
        State state;
        uint createdAt;
        bool buyerConfirmed;
        bool verifierConfirmed;
    }

    Agreement[] public agreements;

    event AgreementCreated(
        uint indexed id,
        address buyer,
        address seller,
        address verifier,
        uint amount,
        string description
    );
    event Funded(uint indexed id);
    event DeliveryRequested(uint indexed id);
    event DeliveryConfirmed(uint indexed id, address confirmedBy);
    event Completed(uint indexed id);
    event Refunded(uint indexed id);
    event DisputeRaised(uint indexed id);
    event DisputeResolved(uint indexed id, address winner);

    uint public constant TIMEOUT = 7 days;

    function newAgreement(
        address _seller,
        address _verifier,
        string memory _description
    ) external payable nonReentrant returns (uint) {
        require(msg.sender != _seller, 'Buyer and seller cannot be the same');
        require(msg.value > 0, 'Amount must be greater than 0');
        require(
            _seller != address(0) && _verifier != address(0),
            'Invalid address'
        );

        uint id = agreements.length;
        agreements.push(
            Agreement(
                msg.sender,
                _seller,
                address(0), // Arbitrator address can be set later
                _verifier,
                msg.value,
                _description,
                State.Funded,
                block.timestamp,
                false,
                false
            )
        );

        emit AgreementCreated(
            id,
            msg.sender,
            _seller,
            _verifier,
            msg.value,
            _description
        );
        emit Funded(id);

        return id;
    }

    function requestDelivery(uint _id) external {
        Agreement storage agreement = agreements[_id];
        require(
            msg.sender == agreement.seller,
            'Only seller can request delivery confirmation'
        );
        require(agreement.state == State.Funded, 'Invalid state');

        agreement.state = State.DeliveryRequested;
        emit DeliveryRequested(_id);
    }

    function confirmDelivery(uint _id) external {
        Agreement storage agreement = agreements[_id];
        require(
            msg.sender == agreement.buyer || msg.sender == agreement.verifier,
            'Only buyer or verifier can confirm delivery'
        );
        require(
            agreement.state == State.DeliveryRequested,
            'Delivery not requested yet'
        );

        if (msg.sender == agreement.buyer) {
            agreement.buyerConfirmed = true;
        } else {
            agreement.verifierConfirmed = true;
        }

        emit DeliveryConfirmed(_id, msg.sender);

        if (agreement.buyerConfirmed && agreement.verifierConfirmed) {
            agreement.state = State.Delivered;
        }
    }

    function complete(uint _id) external nonReentrant {
        Agreement storage agreement = agreements[_id];
        require(msg.sender == agreement.buyer, 'Only buyer can complete');
        require(
            agreement.state == State.Delivered,
            'Goods/services not delivered'
        );

        agreement.state = State.Completed;
        uint amount = agreement.amount;
        agreement.amount = 0; // Set to 0 before transfer to prevent reentrancy
        payable(agreement.seller).transfer(amount);
        emit Completed(_id);
    }

    function refund(uint _id) external nonReentrant {
        Agreement storage agreement = agreements[_id];
        require(msg.sender == agreement.seller, 'Only seller can refund');
        require(agreement.state == State.Funded, 'Invalid state for refund');

        agreement.state = State.Refunded;
        uint amount = agreement.amount;
        agreement.amount = 0; // Set to 0 before transfer to prevent reentrancy
        payable(agreement.buyer).transfer(amount);
        emit Refunded(_id);
    }

    function raiseDispute(uint _id) external {
        Agreement storage agreement = agreements[_id];
        require(
            msg.sender == agreement.buyer || msg.sender == agreement.seller,
            'Only buyer or seller can raise dispute'
        );
        require(
            agreement.state == State.Funded ||
                agreement.state == State.Delivered,
            'Invalid state for dispute'
        );

        agreement.state = State.Disputed;
        emit DisputeRaised(_id);
    }

    function resolveDispute(uint _id, address _winner) external nonReentrant {
        Agreement storage agreement = agreements[_id];
        require(
            msg.sender == agreement.arbitrator,
            'Only arbitrator can resolve dispute'
        );
        require(agreement.state == State.Disputed, 'No active dispute');
        require(
            _winner == agreement.buyer || _winner == agreement.seller,
            'Invalid winner address'
        );

        agreement.state = State.Completed;
        uint amount = agreement.amount;
        agreement.amount = 0; // Set to 0 before transfer to prevent reentrancy
        payable(_winner).transfer(amount);
        emit DisputeResolved(_id, _winner);
    }

    function setArbitrator(uint _id, address _arbitrator) external {
        Agreement storage agreement = agreements[_id];
        require(
            msg.sender == agreement.buyer || msg.sender == agreement.seller,
            'Only buyer or seller can set arbitrator'
        );
        require(agreement.arbitrator == address(0), 'Arbitrator already set');
        require(_arbitrator != address(0), 'Invalid arbitrator address');

        agreement.arbitrator = _arbitrator;
    }

    function claimTimeout(uint _id) external nonReentrant {
        Agreement storage agreement = agreements[_id];
        require(msg.sender == agreement.buyer, 'Only buyer can claim timeout');
        require(agreement.state == State.Funded, 'Invalid state for timeout');
        require(
            block.timestamp >= agreement.createdAt + TIMEOUT,
            'Timeout not reached'
        );

        agreement.state = State.Refunded;
        uint amount = agreement.amount;
        agreement.amount = 0; // Set to 0 before transfer to prevent reentrancy
        payable(agreement.buyer).transfer(amount);
        emit Refunded(_id);
    }
}
