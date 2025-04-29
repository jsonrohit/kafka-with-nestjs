import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducerService } from './services/producer.service';
import { ConsumerService } from './services/consumer.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProducerService, ConsumerService],
  exports: [ProducerService, ConsumerService]
})
export class AppModule { }


