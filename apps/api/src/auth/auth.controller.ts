import {Body, Controller, Post, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service.js';
import {CreateUserDto} from "../user/dto/CreateUserDto.dto.js";
import {LocalAuthGuard} from "./guards/local-auth/local-auth.guard.js";
import {RefreshAuthGuard} from "./guards/refresh-auth/refresh-auth.guard.js";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }

  //@UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  login(@Request() req: any) {
    return this.authService.login(req.user.id, req.user.name, req.user.role);
  }

  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  refreshToken(@Request() req: any) {
    return this.authService.refreshToken(req.user.id, req.user.name);
  }
}
