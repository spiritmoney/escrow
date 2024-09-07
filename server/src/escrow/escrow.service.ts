import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class EscrowService {
  private contract: ethers.Contract;

  constructor() {
    // Initialize the contract here
    // You'll need to provide the contract ABI and address
    // const provider = new ethers.providers.JsonRpcProvider('YOUR_RPC_URL');
    // const signer = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);
    // this.contract = new ethers.Contract('CONTRACT_ADDRESS', ABI, signer);
  }

  async newAgreement(seller: string, verifier: string, description: string, amount: string) {
    const tx = await this.contract.newAgreement(seller, verifier, description, { value: amount });
    return tx.wait();
  }

  async requestDelivery(id: number) {
    const tx = await this.contract.requestDelivery(id);
    return tx.wait();
  }

  async confirmDelivery(id: number) {
    const tx = await this.contract.confirmDelivery(id);
    return tx.wait();
  }

  async complete(id: number) {
    const tx = await this.contract.complete(id);
    return tx.wait();
  }

  async refund(id: number) {
    const tx = await this.contract.refund(id);
    return tx.wait();
  }

  async raiseDispute(id: number) {
    const tx = await this.contract.raiseDispute(id);
    return tx.wait();
  }

  async resolveDispute(id: number, winner: string) {
    const tx = await this.contract.resolveDispute(id, winner);
    return tx.wait();
  }

  async setArbitrator(id: number, arbitrator: string) {
    const tx = await this.contract.setArbitrator(id, arbitrator);
    return tx.wait();
  }

  async claimTimeout(id: number) {
    const tx = await this.contract.claimTimeout(id);
    return tx.wait();
  }
}
