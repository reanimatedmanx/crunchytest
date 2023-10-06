import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeaturesModule } from './features/features.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [FeaturesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
