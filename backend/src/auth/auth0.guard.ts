import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as jwt from 'jsonwebtoken'
import * as jwksClient from 'jwks-rsa'

/**
 * Auth0 JWT Guard
 * Validates JWT tokens from Auth0
 * 
 * TODO: Complete implementation with proper JWT verification
 * - Fetch JWKS from Auth0
 * - Verify token signature
 * - Validate token claims (audience, issuer, expiration)
 */
@Injectable()
export class Auth0Guard implements CanActivate {
  private client: jwksClient.JwksClient

  constructor(private configService: ConfigService) {
    const auth0Domain = this.configService.get<string>('AUTH0_DOMAIN')
    
    if (auth0Domain) {
      this.client = jwksClient({
        jwksUri: `https://${auth0Domain}/.well-known/jwks.json`,
        cache: true,
        rateLimit: true,
      })
    }
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)

    if (!token) {
      throw new UnauthorizedException('No token provided')
    }

    try {
      // TODO: Implement full JWT verification
      // For now, this is a stub that accepts any token in development
      if (process.env.NODE_ENV === 'development') {
        console.warn('⚠️  Auth0Guard: Running in development mode, skipping token validation')
        request.user = { sub: 'dev-user' }
        return true
      }

      // Production token validation
      const payload = await this.verifyToken(token)
      request.user = payload
      return true
    } catch (error) {
      throw new UnauthorizedException('Invalid token')
    }
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }

  private async verifyToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        (header, callback) => {
          this.client.getSigningKey(header.kid, (err, key) => {
            if (err) {
              callback(err)
            } else {
              const signingKey = key.getPublicKey()
              callback(null, signingKey)
            }
          })
        },
        {
          audience: this.configService.get<string>('AUTH0_AUDIENCE'),
          issuer: `https://${this.configService.get<string>('AUTH0_DOMAIN')}/`,
          algorithms: ['RS256'],
        },
        (err, decoded) => {
          if (err) {
            reject(err)
          } else {
            resolve(decoded)
          }
        },
      )
    })
  }
}
