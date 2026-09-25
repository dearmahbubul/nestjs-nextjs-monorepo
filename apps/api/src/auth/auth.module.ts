import {Module} from '@nestjs/common';
import {AuthService} from './auth.service.js';
import {AuthController} from './auth.controller.js';
import {PrismaService} from "../prisma/prisma.service.js";
import {UserService} from "../user/user.service.js";
import {LocalStrategy} from "./stretegies/local.streategy.js";
import {JwtStrategy} from "./stretegies/jwt.streategy.js";
import {JwtModule} from "@nestjs/jwt";
import jwtConfig from "./config/jwt.config.js";
import {ConfigModule} from "@nestjs/config";
import refreshConfig from "./config/refresh.config.js";
import {RefreshStrategy} from "./stretegies/refresh-token.strategy.js";
import {PassportModule} from "@nestjs/passport";

@Module({
    imports: [
        PassportModule.register({}),
        JwtModule.registerAsync(jwtConfig.asProvider()),
        ConfigModule.forFeature(jwtConfig),
        ConfigModule.forFeature(refreshConfig),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        PrismaService,
        UserService,
        LocalStrategy,
        JwtStrategy,
        RefreshStrategy,
    ],
})
export class AuthModule {}
