import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { InfinityPayService } from '../../services/infinitypay.service';

/**
 * Payments module for InfinityPay integration
 * 
 * This module handles billing and payment operations.
 */
@Module({
  controllers: [PaymentsController],
  providers: [InfinityPayService],
  exports: [InfinityPayService],
})
export class PaymentsModule {}
