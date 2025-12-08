import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { InfinitypayService } from './services/infinitypay.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
  ],
  providers: [PrismaService, InfinitypayService],
  exports: [PrismaService],
})
export class AppModule {}
