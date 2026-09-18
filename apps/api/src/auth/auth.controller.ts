import {Body, Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service.js';
import {CreateUserDto} from "../user/dto/CreateUserDto.dto.js";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }
}
