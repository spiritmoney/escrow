import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ethers } from 'ethers';
import { EscrowEntity } from './entities/escrow.entity';  // Assuming you have an entity for escrow agreements.

@Injectable()
export class EscrowService {
  private contract: ethers.Contract;

  constructor(
    @InjectRepository(EscrowEntity)
    private escrowRepository: Repository<EscrowEntity>,
  ) {
    // Initialize the contract here
    // const provider = new ethers.providers.Web3Provider(window.ethereum) 
      //  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    // this.contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, process.env.ABI, signer);
  }

  // async newAgreement(seller: string, verifier: string, description: string, amount: string) {
  //   try {
  //     // Interact with the smart contract
  //     const tx = await this.contract.newAgreement(
  //       seller, 
  //       verifier, 
  //       description, 
  //       { value: ethers.utils.parseEther(amount) }
  //     );
      
  //     // Save agreement data in the database
  //     const escrow = this.escrowRepository.create({
  //       seller,
  //       verifier,
  //       description,
  //       amount,
  //       status: 'Pending',
  //     });
  //     return await this.escrowRepository.save(escrow);
  //   } catch (error) {
  //     throw new Error(`Failed to create a new agreement: ${error.message}`);
  //   }
  // }

  // Request the delivery in the contract and update in the database
  async requestDelivery(id: number) {
    const escrow = await this.escrowRepository.findOne({ where: { id } });
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.requestDelivery(id);
      await tx.wait();

      escrow.status = 'Delivery Requested';
      return await this.escrowRepository.save(escrow);
    } catch (error) {
      throw new Error(`Failed to request delivery: ${error.message}`);
    }
  }

  // Confirm the delivery and update database
  async confirmDelivery(id: number) {
    const escrow = await this.escrowRepository.findOne({ where: { id } });
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.confirmDelivery(id);
      await tx.wait();

      escrow.status = 'Delivered';
      return await this.escrowRepository.save(escrow);
    } catch (error) {
      throw new Error(`Failed to confirm delivery: ${error.message}`);
    }
  }

  // Complete the escrow process
  async complete(id: number) {
    const escrow = await this.escrowRepository.findOne({ where: { id } });
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.complete(id);
      await tx.wait();

      escrow.status = 'Completed';
      return await this.escrowRepository.save(escrow);
    } catch (error) {
      throw new Error(`Failed to complete agreement: ${error.message}`);
    }
  }

  // Refund process
  async refund(id: number) {
    const escrow = await this.escrowRepository.findOne({ where: { id } });
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.refund(id);
      await tx.wait();

      escrow.status = 'Refunded';
      return await this.escrowRepository.save(escrow);
    } catch (error) {
      throw new Error(`Failed to refund agreement: ${error.message}`);
    }
  }

  // Raise dispute
  async raiseDispute(id: number) {
    const escrow = await this.escrowRepository.findOne({ where: { id } });
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.raiseDispute(id);
      await tx.wait();

      escrow.status = 'Dispute Raised';
      return await this.escrowRepository.save(escrow);
    } catch (error) {
      throw new Error(`Failed to raise dispute: ${error.message}`);
    }
  }

  // Resolve dispute
  async resolveDispute(id: number, winner: string) {
    const escrow = await this.escrowRepository.findOne({ where: { id } });
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.resolveDispute(id, winner);
      await tx.wait();

      escrow.status = 'Dispute Resolved';
      escrow.winner = winner;
      return await this.escrowRepository.save(escrow);
    } catch (error) {
      throw new Error(`Failed to resolve dispute: ${error.message}`);
    }
  }

  // Set an arbitrator for the agreement
  async setArbitrator(id: number, arbitrator: string) {
    const escrow = await this.escrowRepository.findOne({ where: { id } });
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.setArbitrator(id, arbitrator);
      await tx.wait();

      escrow.arbitrator = arbitrator;
      return await this.escrowRepository.save(escrow);
    } catch (error) {
      throw new Error(`Failed to set arbitrator: ${error.message}`);
    }
  }

  // Claim timeout
  async claimTimeout(id: number) {
    const escrow = await this.escrowRepository.findOne({ where: { id } });
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.claimTimeout(id);
      await tx.wait();

      escrow.status = 'Timeout Claimed';
      return await this.escrowRepository.save(escrow);
    } catch (error) {
      throw new Error(`Failed to claim timeout: ${error.message}`);
    }
  }
}