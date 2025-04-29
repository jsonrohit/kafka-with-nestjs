import { Injectable } from '@nestjs/common';
import { ConsumerService } from './services/consumer.service';
import { ProducerService } from './services/producer.service';

@Injectable()
export class AppService {
  constructor(private producerService: ProducerService, private consumerService: ConsumerService) {
  }

  async getHello() {
    await this.producerService.produce({
      topic: 'test',
      messages: [{
        value: "hello kafka"
      }]
    })

    this.consumerService.consume(
      { topic: 'test' },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            value: message.value?.toString(),
            topic: topic?.toString(),
            partition: partition?.toString()
          });
        }
      }
    )
    return 'Check your project terminal or console';
  }

}
