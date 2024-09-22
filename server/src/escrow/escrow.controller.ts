import { Controller, Post, Body, Param } from '@nestjs/common';
import { EscrowService } from './escrow.service';

@Controller('escrow')
export class EscrowController {
  constructor(private escrowService: EscrowService) {}

  @Post('request-delivery/:id')
  async requestDelivery(@Param('id') id: string) {
    return this.escrowService.requestDelivery(id);
  }

  @Post('confirm-delivery/:id')
  async confirmDelivery(@Param('id') id: string) {
    return this.escrowService.confirmDelivery(id);
  }

  @Post('complete/:id')
  async complete(@Param('id') id: string) {
    return this.escrowService.complete(id);
  }

  @Post('refund/:id')
  async refund(@Param('id') id: string) {
    return this.escrowService.refund(id);
  }

  @Post('raise-dispute/:id')
  async raiseDispute(@Param('id') id: string) {
    return this.escrowService.raiseDispute(id);
  }

  @Post('resolve-dispute/:id')
  async resolveDispute(
    @Param('id') id: string,
    @Body('winner') winner: string,
  ) {
    return this.escrowService.resolveDispute(id, winner);
  }

  @Post('set-arbitrator/:id')
  async setArbitrator(
    @Param('id') id: string,
    @Body('arbitrator') arbitrator: string,
  ) {
    return this.escrowService.setArbitrator(id, arbitrator);
  }

  @Post('claim-timeout/:id')
  async claimTimeout(@Param('id') id: string) {
    return this.escrowService.claimTimeout(id);
  }
}
