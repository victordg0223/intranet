import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

/**
 * Auth module for Auth0 integration
 * 
 * This module provides authentication services using Auth0.
 * 
 * TODO: Implement full Auth0 integration
 * - Add Auth0 JWT verification
 * - Add Auth0 user sync
 * - Add role-based access control
 * - Add tenant validation
 */
@Module({
  providers: [AuthService, AuthGuard],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}
