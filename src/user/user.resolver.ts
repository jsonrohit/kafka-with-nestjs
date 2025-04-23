import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { KafkaService } from 'src/services/kafka.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService, private readonly kafkaService: KafkaService) {}

  @Mutation('location')
  async updateLocation(
    @Args('userId') userId: number,
    @Args('latitude') latitude: number,
    @Args('longitude') longitude: number
  ) {
    const location = await this.userService.updateLocation(userId, latitude, longitude);
    // push to Kafka
    await this.kafkaService.sendLocation(location);
    return location;
  }

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query('user')
  findAll() {
    return this.userService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  }
}
