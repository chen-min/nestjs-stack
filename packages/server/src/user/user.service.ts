import { Injectable } from '@nestjs/common';
import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class UserService {
  findAll({ id }: FindUserDto) {
    return id;
  }
}
