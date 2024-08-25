import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repo';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.uid = createUserDto.uid;
    user.email = createUserDto.email;
    user.given_name = createUserDto.given_name;
    user.middle_name = createUserDto.middle_name;
    user.name = createUserDto.name;
    user.family_name = createUserDto.family_name;
    user.nickname = createUserDto.nickname;
    user.phone_number = createUserDto.phone_number;
    user.comment = createUserDto.comment;
    user.picture = createUserDto.picture;
    user.directory = createUserDto.directory;
    user.tags = createUserDto.tags;
    user.is_suspended = createUserDto.is_suspended;
    user.is_bot = createUserDto.is_bot;
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: string, createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    user.given_name = createUserDto.given_name;
    user.middle_name = createUserDto.middle_name;
    user.name = createUserDto.name;
    user.family_name = createUserDto.family_name;
    user.nickname = createUserDto.nickname;
    user.phone_number = createUserDto.phone_number;
    user.comment = createUserDto.comment;
    user.picture = createUserDto.picture;
    user.directory = createUserDto.directory;
    user.tags = createUserDto.tags;
    user.is_suspended = createUserDto.is_suspended;
    user.is_bot = createUserDto.is_bot;
    return this.userRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.userRepository.remove(user);
  }
}
