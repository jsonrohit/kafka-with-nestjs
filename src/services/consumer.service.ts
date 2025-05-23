import { Injectable, OnApplicationShutdown } from "@nestjs/common";
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopic, Kafka } from "kafkajs";

// kafka.service.ts
@Injectable()
export class ConsumerService implements OnApplicationShutdown {
  private kafka = new Kafka({ brokers: ['localhost:9092'] });

  private consumers: Consumer[] = []

  async consume(topic: ConsumerSubscribeTopic, config: ConsumerRunConfig) {
    const consumer = this.kafka.consumer({ groupId: 'nestjs-kafka' })
    await consumer.connect();
    await consumer.subscribe(topic);
    await consumer.run(config);
    this.consumers.push(consumer);
  }

  async onApplicationShutdown(signal: string) {
    for (const consumer of this.consumers) {
      await consumer.disconnect();
    }
  }

}