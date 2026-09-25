import {PassportStrategy} from "@nestjs/passport";
import {Inject, Injectable} from "@nestjs/common";
import {AuthService} from "../auth.service.js";
import jwtConfig from "../config/jwt.config.js";
import type {ConfigType} from "@nestjs/config";
import {ExtractJwt, Strategy} from "passport-jwt";
import type {AuthJwtPayload} from "../types/auth-jwtPayload.js";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(jwtConfig.KEY)
        private jwtConfiguration: ConfigType<typeof jwtConfig>,
        private authService: AuthService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConfiguration.secret as string,
            ignoreExpiration: false,
        });
    }

    validate(payload: AuthJwtPayload) {
        const userId = payload.sub;
        return this.authService.validateJwtUser(userId);
    }
}