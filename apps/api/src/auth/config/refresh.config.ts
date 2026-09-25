import { registerAs } from '@nestjs/config';
import { JwtSignOptions } from '@nestjs/jwt';

interface RefreshJwtConfig {
  secret: string;
  expiresIn: JwtSignOptions['expiresIn'];
}

export default registerAs(
  'refresh-jwt',
  (): RefreshJwtConfig => ({
    secret: process.env.REFRESH_JWT_SECRET ?? '',
    expiresIn: (process.env.REFRESH_JWT_EXPIRES_IN ?? '1d') as JwtSignOptions['expiresIn'],
  }),
);
