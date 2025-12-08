import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * Auth guard for protecting routes
 * 
 * This guard validates JWT tokens from Auth0.
 * 
 * TODO: Implement full authentication guard
 * - Extract token from Authorization header
 * - Validate JWT with Auth0
 * - Attach user to request object
 * - Handle expired tokens
 * - Handle invalid tokens
 */
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    
    // TODO: Implement JWT validation
    // const token = this.extractTokenFromHeader(request);
    // const user = await this.authService.validateToken(token);
    // request.user = user;
    
    // Placeholder: Allow all requests (REMOVE IN PRODUCTION)
    console.warn('⚠️  Auth guard is not implemented - allowing all requests');
    return true;
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
