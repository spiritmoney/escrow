import { Injectable } from '@nestjs/common';
import { Freelancer } from './freelancer.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FreelancerService {
  constructor(@InjectModel(Freelancer.name) private freelancerModel: Model<Freelancer>) {}

  async completeProfile(userId: string, profileData): Promise<Freelancer> {
    const freelancer = await this.freelancerModel.findOneAndUpdate(
      { userId },
      { ...profileData, profileSetupComplete: true },
      { new: true, upsert: true }
    );
    return freelancer;
  }

  async getDashboard(userId: string): Promise<any> {
    // Fetch freelancer details for the dashboard
    const freelancer = await this.freelancerModel.findOne({ userId });
    if (!freelancer) {
      throw new Error('Freelancer not found');
    }
    
    return {
      profile: freelancer,
      totalOrders: freelancer.orders.length,
      totalEarnings: freelancer.earnings,
      completedProjects: freelancer.analytics?.completedProjects || 0,
    };
  }

  async getOrders(userId: string): Promise<any[]> {
    // Fetch orders for the freelancer
    const freelancer = await this.freelancerModel.findOne({ userId });
    return freelancer ? freelancer.orders : [];
  }

  async getMessages(userId: string): Promise<any[]> {
    // Fetch messages for the freelancer
    const freelancer = await this.freelancerModel.findOne({ userId });
    return freelancer ? freelancer.messages : [];
  }

  async getAnalytics(userId: string): Promise<any> {
    // Fetch analytics data for the freelancer
    const freelancer = await this.freelancerModel.findOne({ userId });
    return freelancer ? freelancer.analytics : {};
  }

  async getEarnings(userId: string): Promise<number> {
    // Calculate and return total earnings
    const freelancer = await this.freelancerModel.findOne({ userId });
    return freelancer ? freelancer.earnings : 0;
  }

  async getSkills(userId: string): Promise<string[]> {
    // Fetch the freelancer's skills (assuming skills are part of the profile)
    const freelancer = await this.freelancerModel.findOne({ userId });
    return freelancer ? freelancer.skills : [];
  }

  async getProfile(userId: string): Promise<Freelancer> {
    // Fetch the complete profile of the freelancer
    const freelancer = await this.freelancerModel.findOne({ userId });
    if (!freelancer) {
      throw new Error('Freelancer not found');
    }
    return freelancer;
  }

  async updateProfile(userId: string, updateData: Partial<Freelancer>): Promise<Freelancer> {
    // Update specific fields in the freelancer's profile
    const freelancer = await this.freelancerModel.findOneAndUpdate(
      { userId },
      updateData,
      { new: true }
    );
    if (!freelancer) {
      throw new Error('Freelancer not found');
    }
    return freelancer;
  }

  async getReviews(userId: string): Promise<any[]> {
    // Fetch reviews for the freelancer (assuming reviews are stored separately)
    const freelancer = await this.freelancerModel.findOne({ userId });
    return freelancer ? freelancer.reviews : [];
  }

  async updateAvailability(userId: string, availabilityData: any): Promise<Freelancer> {
    // Update the freelancer's availability status
    const freelancer = await this.freelancerModel.findOneAndUpdate(
      { userId },
      { availability: availabilityData },
      { new: true }
    );
    if (!freelancer) {
      throw new Error('Freelancer not found');
    }
    return freelancer;
  }
}
