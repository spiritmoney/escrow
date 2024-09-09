

import { Controller, Post, Body, Param } from '@nestjs/common';
import { EscrowService } from './escrow.service';

@Controller('escrow')
export class EscrowController {
  constructor(private escrowService: EscrowService) {}

  // @Post('new-agreement')
  // async newAgreement(
  //   @Body()
  //   body: {
  //     seller: string;
  //     verifier: string;
  //     description: string;
  //     amount: string;
  //   },
  // ) {
  //   return this.escrowService.newAgreement(
  //     body.seller,
  //     body.verifier,
  //     body.description,
  //     body.amount,
  //   );
  // }

  @Post('request-delivery/:id')
  async requestDelivery(@Param('id') id: number) {
    return this.escrowService.requestDelivery(id);
  }

  @Post('confirm-delivery/:id')
  async confirmDelivery(@Param('id') id: number) {
    return this.escrowService.confirmDelivery(id);
  }

  @Post('complete/:id')
  async complete(@Param('id') id: number) {
    return this.escrowService.complete(id);
  }

  @Post('refund/:id')
  async refund(@Param('id') id: number) {
    return this.escrowService.refund(id);
  }

  @Post('raise-dispute/:id')
  async raiseDispute(@Param('id') id: number) {
    return this.escrowService.raiseDispute(id);
  }

  @Post('resolve-dispute/:id')
  async resolveDispute(
    @Param('id') id: number,
    @Body('winner') winner: string,
  ) {
    return this.escrowService.resolveDispute(id, winner);
  }

  @Post('set-arbitrator/:id')
  async setArbitrator(
    @Param('id') id: number,
    @Body('arbitrator') arbitrator: string,
  ) {
    return this.escrowService.setArbitrator(id, arbitrator);
  }

  @Post('claim-timeout/:id')
  async claimTimeout(@Param('id') id: number) {
    return this.escrowService.claimTimeout(id);
  }
}