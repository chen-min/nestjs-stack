import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    private readonly userRepository;
    constructor(userService: UserService, userRepository: Repository<User>);
    findAll(): any;
}
