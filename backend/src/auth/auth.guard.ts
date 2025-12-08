import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
// import jwt from 'jsonwebtoken';
// import jwksClient from 'jwks-rsa';

/**
 * Auth guard for protecting routes using Auth0 JWT validation
 * 
 * This guard validates JWT tokens from Auth0 using jwks-rsa and jsonwebtoken.
 * 
 * TODO: Before production deployment, implement full JWT verification:
 * 1. Uncomment imports: jwks-rsa and jsonwebtoken
 * 2. Uncomment the validateToken method implementation
 * 3. Replace the stub canActivate with actual JWT validation
 * 4. Configure AUTH0_DOMAIN and AUTH0_AUDIENCE in .env
 * 5. Test with real Auth0 tokens
 * 
 * Required packages (already in package.json):
 * - jwks-rsa: For fetching Auth0 public keys
 * - express-jwt: For Express JWT middleware (optional, using jsonwebtoken directly)
 * 
 * This is a STUB implementation marked for replacement with passport strategy.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  // Uncomment when ready to implement:
  // private client = jwksClient({
  //   jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  //   cache: true,
  //   rateLimit: true,
  // });

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    
    // STUB IMPLEMENTATION - TODO: Replace with passport strategy
    // SECURITY WARNING: This guard currently allows all requests!
    // 
    // To implement JWT validation before production:
    // 1. Uncomment the client initialization above
    // 2. Uncomment the validateToken implementation below
    // 3. Replace this stub with:
    //    return this.validateToken(request);
    // 4. Or better: Replace entire guard with @nestjs/passport strategy
    
    console.warn('⚠️  SECURITY WARNING: Auth0 guard is STUB - allowing all requests');
    console.warn('⚠️  TODO: Replace with passport JWT strategy before production!');
    return true;
  }

  // TODO: Uncomment and use this method when ready to implement JWT validation
  // private async validateToken(request: any): Promise<boolean> {
  //   const token = this.extractTokenFromHeader(request);
  //   
  //   if (!token) {
  //     throw new UnauthorizedException('No authentication token provided');
  //   }
  //
  //   try {
  //     // Get signing key from Auth0 JWKS
  //     const decodedToken = jwt.decode(token, { complete: true });
  //     if (!decodedToken || !decodedToken.header || !decodedToken.header.kid) {
  //       throw new UnauthorizedException('Invalid token structure');
  //     }
  //     
  //     const key = await this.client.getSigningKey(decodedToken.header.kid);
  //     const signingKey = key.getPublicKey();
  //     
  //     // Verify JWT
  //     const payload = jwt.verify(token, signingKey, {
  //       audience: process.env.AUTH0_AUDIENCE,
  //       issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  //       algorithms: ['RS256'],
  //     });
  //     
  //     // Attach user to request
  //     request.user = payload;
  //     return true;
  //   } catch (error) {
  //     console.error('JWT validation failed:', error.message);
  //     throw new UnauthorizedException('Invalid or expired token');
  //   }
  // }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}

// NOTE: This guard is a stub. For production use, replace with @nestjs/passport:
// import { AuthGuard } from '@nestjs/passport';
// @UseGuards(AuthGuard('jwt'))
