import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { PrismaService } from './db/prisma.service';

@Module({
  imports: [AuthModule, DbModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
