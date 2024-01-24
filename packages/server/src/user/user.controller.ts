import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { FindUserDto } from './dto/find-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  @Post()
  findAll(@Body() dto: FindUserDto) {
    return this.userService.findAll(dto);
  }
}
