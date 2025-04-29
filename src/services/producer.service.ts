import { Injectable, OnApplicationShutdown, OnModuleInit } from "@nestjs/common";
import { Kafka, Producer, ProducerRecord } from "kafkajs";

// kafka.service.ts
@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationShutdown {
  private kafka = new Kafka({ brokers: ['localhost:9092'] });
  private producer: Producer = this.kafka.producer();

  async onModuleInit(){
    await this.producer.connect();
  }

  async produce(record: ProducerRecord) {
    await this.producer.send(record);
  }

  async onApplicationShutdown(signal: string) {
    await this.producer.disconnect();
  }

}