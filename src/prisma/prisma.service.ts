import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  constructor(private prisma: PrismaClient) {
  }
  // On module initialization, connect to the database
  async onModuleInit() {
    await this.prisma.$connect();
  }

  // On module destruction, disconnect from the database
  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
