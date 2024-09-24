import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ethers } from 'ethers';
import { Escrow } from './entities/escrow.entity';

@Injectable()
export class EscrowService {
  private contract: ethers.Contract;

  constructor(
    @InjectModel(Escrow.name) private escrowModel: Model<Escrow>,
  ) {
    // Initialize the contract here
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    // this.contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, process.env.ABI, signer);
  }

  async requestDelivery(id: string) {
    const escrow = await this.escrowModel.findById(id);
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.requestDelivery(id);
      await tx.wait();

      escrow.status = 'Delivery Requested';
      return await escrow.save();
    } catch (error) {
      throw new Error(`Failed to request delivery: ${error.message}`);
    }
  }

  async confirmDelivery(id: string) {
    const escrow = await this.escrowModel.findById(id);
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.confirmDelivery(id);
      await tx.wait();

      escrow.status = 'Delivered';
      return await escrow.save();
    } catch (error) {
      throw new Error(`Failed to confirm delivery: ${error.message}`);
    }
  }

  async complete(id: string) {
    const escrow = await this.escrowModel.findById(id);
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.complete(id);
      await tx.wait();

      escrow.status = 'Completed';
      return await escrow.save();
    } catch (error) {
      throw new Error(`Failed to complete agreement: ${error.message}`);
    }
  }

  async refund(id: string) {
    const escrow = await this.escrowModel.findById(id);
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.refund(id);
      await tx.wait();

      escrow.status = 'Refunded';
      return await escrow.save();
    } catch (error) {
      throw new Error(`Failed to refund agreement: ${error.message}`);
    }
  }

  async raiseDispute(id: string) {
    const escrow = await this.escrowModel.findById(id);
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.raiseDispute(id);
      await tx.wait();

      escrow.status = 'Dispute Raised';
      return await escrow.save();
    } catch (error) {
      throw new Error(`Failed to raise dispute: ${error.message}`);
    }
  }

  async resolveDispute(id: string, winner: string) {
    const escrow = await this.escrowModel.findById(id);
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.resolveDispute(id, winner);
      await tx.wait();

      escrow.status = 'Dispute Resolved';
      escrow.winner = winner;
      return await escrow.save();
    } catch (error) {
      throw new Error(`Failed to resolve dispute: ${error.message}`);
    }
  }

  async setArbitrator(id: string, arbitrator: string) {
    const escrow = await this.escrowModel.findById(id);
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.setArbitrator(id, arbitrator);
      await tx.wait();

      escrow.arbitrator = arbitrator;
      return await escrow.save();
    } catch (error) {
      throw new Error(`Failed to set arbitrator: ${error.message}`);
    }
  }

  async claimTimeout(id: string) {
    const escrow = await this.escrowModel.findById(id);
    if (!escrow) throw new NotFoundException('Escrow agreement not found.');

    try {
      const tx = await this.contract.claimTimeout(id);
      await tx.wait();

      escrow.status = 'Timeout Claimed';
      return await escrow.save();
    } catch (error) {
      throw new Error(`Failed to claim timeout: ${error.message}`);
    }
  }
}
