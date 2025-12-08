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
    
    // TODO: Implement JWT validation before production deployment
    // SECURITY WARNING: This guard currently allows all requests!
    // 
    // Implementation steps:
    // 1. Uncomment and implement the following:
    //    const token = this.extractTokenFromHeader(request);
    //    if (!token) {
    //      throw new UnauthorizedException('No token provided');
    //    }
    //    const user = await this.authService.validateToken(token);
    //    request.user = user;
    //    return true;
    // 
    // 2. Install required packages: npm install express-jwt jwks-rsa
    // 3. Configure Auth0 domain and audience in environment variables
    // 4. Test thoroughly before deploying to production
    
    console.warn('⚠️  SECURITY WARNING: Auth guard is not implemented - allowing all requests');
    console.warn('⚠️  DO NOT USE IN PRODUCTION without implementing authentication!');
    return true;
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
