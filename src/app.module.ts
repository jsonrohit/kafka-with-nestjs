import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { KafkaService } from './services/kafka.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, KafkaService, PrismaService],
})
export class AppModule { }
