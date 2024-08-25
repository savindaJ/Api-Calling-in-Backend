import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.appService.findAll();
  }

  @Post("create")
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.appService.createUser(createUserDto);
  }

  @Get("users")
  async findAll(): Promise<User[]> {
    return this.appService.findAll();
  }

  @Get('users/:id')
  async findOne(@Param('id') id: string): Promise<User> {
    const user = await this.appService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  @Patch('users/:id')
  async update(@Param('id') id: string, @Body() createUserDto: CreateUserDto): Promise<User> {
    return this.appService.update(id, createUserDto);
  }

  @Delete('users/:id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.appService.remove(id);
  }
}
