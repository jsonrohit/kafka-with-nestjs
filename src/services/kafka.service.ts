import { Injectable } from "@nestjs/common";
import { Kafka } from "kafkajs";

// kafka.service.ts
@Injectable()
export class KafkaService {
  private kafka = new Kafka({ brokers: ['localhost:9092'] });
  private producer = this.kafka.producer();

  async sendLocation(location: Location) {
    await this.producer.connect();
    await this.producer.send({
      topic: 'location_updates',
      messages: [{ value: JSON.stringify(location) }],
    });
    await this.producer.disconnect();
  }
}
