import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {

  }

  async updateLocation(userId: number, latitude: number, longitude: number) {
    // Optional: Validate user exists
    // const user = await this.prisma.user.findUnique({ where: { id: userId } });
    // if (!user) {
    //   throw new Error('User not found');
    // }

    // Create a new location record
    // return this.prisma.location.create({
    //   data: {
    //     userId,
    //     latitude,
    //     longitude,
    //   },
    // });
  }

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
