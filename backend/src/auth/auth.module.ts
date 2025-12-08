import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Auth0Guard } from './auth0.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET') || 'dev-secret-change-in-prod',
        signOptions: {
          expiresIn: '1d',
        },
      }),
    }),
  ],
  providers: [Auth0Guard],
  exports: [Auth0Guard],
})
export class AuthModule {}
