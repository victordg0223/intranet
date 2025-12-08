import { Controller, Post, Body, Headers, BadRequestException } from '@nestjs/common'
import { InfinityPayService } from '../../services/infinitypay.service'

/**
 * Payments Controller
 * Handles InfinityPay webhook events
 */
@Controller('payments')
export class PaymentsController {
  constructor(private readonly infinityPayService: InfinityPayService) {}

  /**
   * InfinityPay Webhook Endpoint
   * Receives payment notifications from InfinityPay
   * 
   * TODO: 
   * - Implement webhook signature verification
   * - Handle different event types (payment.completed, payment.failed, etc.)
   * - Store payment records in database
   * - Trigger business logic (activate subscriptions, send receipts, etc.)
   */
  @Post('webhook/infinitypay')
  async handleInfinityPayWebhook(
    @Body() payload: any,
    @Headers('x-infinitypay-signature') signature: string,
  ) {
    // TODO: Verify webhook signature
    if (!signature) {
      throw new BadRequestException('Missing webhook signature')
    }

    try {
      // Verify the webhook signature
      const isValid = await this.infinityPayService.verifyWebhookSignature(
        payload,
        signature,
      )

      if (!isValid) {
        throw new BadRequestException('Invalid webhook signature')
      }

      // Process the webhook event
      const result = await this.infinityPayService.processWebhookEvent(payload)

      return {
        success: true,
        message: 'Webhook processed successfully',
        data: result,
      }
    } catch (error) {
      console.error('InfinityPay webhook error:', error)
      throw new BadRequestException('Failed to process webhook')
    }
  }

  /**
   * Test endpoint to create a payment (stub)
   */
  @Post('create')
  async createPayment(@Body() paymentData: any) {
    // TODO: Implement payment creation logic
    return {
      success: true,
      message: 'Payment endpoint stub',
      data: paymentData,
    }
  }
}
