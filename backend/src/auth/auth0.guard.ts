import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * Auth0 JWT Guard Stub
 * 
 * TODO: Implement proper Auth0 JWT validation
 * This is a placeholder that allows all requests for development.
 * 
 * For production, implement:
 * 1. JWT token validation with Auth0 public keys
 * 2. Token expiration checking
 * 3. Audience and issuer validation
 * 4. User role and permission checking
 * 
 * Example implementation:
 * - Use @nestjs/passport with passport-jwt
 * - Fetch JWKS from Auth0: https://{domain}/.well-known/jwks.json
 * - Validate token signature, expiration, audience, issuer
 * - Extract user info and attach to request.user
 * 
 * References:
 * - https://auth0.com/docs/secure/tokens/json-web-tokens
 * - https://docs.nestjs.com/security/authentication
 */
@Injectable()
export class Auth0Guard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // TODO: Implement real Auth0 JWT validation
    console.warn(
      '⚠️  Auth0Guard is a stub! Implement proper JWT validation before production.',
    );

    const request = context.switchToHttp().getRequest();

    // Stub: Set a fake user for development
    // In production, this should be extracted from validated JWT
    request.user = {
      id: 'dev-user-id',
      email: 'dev@example.com',
      tenantId: 'default-tenant',
      role: 'ADMIN',
    };

    // For development: allow all requests
    // For production: return false if token is invalid
    return true;
  }
}
