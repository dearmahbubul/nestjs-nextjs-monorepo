import {ConflictException, Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service.js";
import {UserService} from "../user/user.service.js";
import {CreateUserDto} from "../user/dto/CreateUserDto.dto.js";

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly userService: UserService
    ) {}

    async registerUser(createUserDto: CreateUserDto) {
        const user = await this.userService.findByEmail(createUserDto.email);
        if (user) throw new ConflictException('User already exists!');
        return this.userService.create(createUserDto);
    }

}
