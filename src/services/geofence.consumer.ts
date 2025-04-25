import { Injectable } from "@nestjs/common";
import { Kafka } from "kafkajs";
import { PrismaService } from "src/prisma/prisma.service";


// geofence.consumer.ts
@Injectable()
export class GeofenceConsumer {
    constructor(private prisma: PrismaService){

    }
  private kafka = new Kafka({ brokers: ['localhost:9092'] });
  private consumer = this.kafka.consumer({ groupId: 'geofence-group' });

  async onModuleInit() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: 'location_updates' });

    await this.consumer.run({
      eachMessage: async ({ message }:any) => {
        const location = JSON.parse(message.value.toString());
        await this.checkGeofence(location);
      }
    });
  }

  async checkGeofence(location) {
    // const geofences = await this.prisma.geofence.findMany();
    // for (const fence of geofences) {
    //   const dist = this.calculateDistance(
    //     location.latitude, location.longitude,
    //     fence.latitude, fence.longitude
    //   );
    //   if (dist < fence.radius) {
    //     console.log(`User ${location.userId} entered geofence ${fence.name}`);
    //     // trigger alert
    //   }
    // }
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth radius in meters
    const φ1 = lat1 * (Math.PI / 180);
    const φ2 = lat2 * (Math.PI / 180);
    const Δφ = (lat2 - lat1) * (Math.PI / 180);
    const Δλ = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(Δφ / 2) ** 2 +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}
