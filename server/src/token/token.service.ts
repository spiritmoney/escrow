import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  private provider: ethers.JsonRpcProvider;
  private fundingWallet: ethers.Wallet;
  private tokenContract: ethers.Contract;

  constructor(private configService: ConfigService) {
    // Initialize provider and funding wallet
    const rpcUrl = this.configService.get<string>('RPC_URL');
    const fundingWalletKey = this.configService.get<string>('FUNDING_WALLET_PRIVATE_KEY');

    this.provider = new ethers.JsonRpcProvider(rpcUrl);
    this.fundingWallet = new ethers.Wallet(fundingWalletKey, this.provider);

    // Espees token contract
    const tokenAddress = '0xCA627884fbc6a841F08101f17A9A10f82C374c29';
    const tokenABI = [
      'function transfer(address to, uint256 amount) returns (bool)',
      'function balanceOf(address account) view returns (uint256)',
    ];

    // Initialize contract with funding wallet
    this.tokenContract = new ethers.Contract(
      tokenAddress, 
      tokenABI, 
      this.fundingWallet
    );
  }

  async transferTokens(to: string, amount: number): Promise<boolean> {
    try {
      console.log(`Initiating transfer of ${amount} tokens to ${to}`);
      
      // Convert amount to proper units (assuming 18 decimals)
      const tokenAmount = ethers.parseUnits(amount.toString(), 18);
      
      // Get current gas price
      const feeData = await this.provider.getFeeData();
      console.log('Current gas prices:', {
        maxFeePerGas: feeData.maxFeePerGas?.toString(),
        maxPriorityFeePerGas: feeData.maxPriorityFeePerGas?.toString(),
      });

      // Check funding wallet balance before transfer
      const fundingBalance = await this.getTokenBalance(this.fundingWallet.address);
      console.log('Funding wallet balance:', fundingBalance);

      // Send transaction
      const tx = await this.tokenContract.transfer(to, tokenAmount, {
        maxFeePerGas: feeData.maxFeePerGas,
        maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
      });

      console.log(`Token transfer transaction initiated: ${tx.hash}`);

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      
      if (receipt.status === 0) {
        throw new Error('Transaction failed');
      }

      console.log(`Tokens transferred successfully. Transaction hash: ${receipt.hash}`);
      
      // Verify final balance
      const recipientBalance = await this.getTokenBalance(to);
      console.log(`Recipient's new balance: ${recipientBalance}`);
      
      return true;
    } catch (error) {
      console.error('Token transfer failed:', error);
      if (error.reason) console.error('Error reason:', error.reason);
      if (error.code) console.error('Error code:', error.code);
      return false;
    }
  }

  async getTokenBalance(address: string): Promise<string> {
    try {
      const balance = await this.tokenContract.balanceOf(address);
      return ethers.formatUnits(balance, 18);
    } catch (error) {
      console.error('Error fetching token balance:', error);
      throw error;
    }
  }
} 