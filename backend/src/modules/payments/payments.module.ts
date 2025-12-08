import { Module } from '@nestjs/common'
import { PaymentsController } from './payments.controller'
import { InfinityPayService } from '../../services/infinitypay.service'

@Module({
  controllers: [PaymentsController],
  providers: [InfinityPayService],
  exports: [InfinityPayService],
})
export class PaymentsModule {}
