import { registerAs } from '@nestjs/config';

export default registerAs('Config', () => ({
  Env: process.env.ENV,
  Version: process.env.APP_VERSION,
  Server: {
    Host: process.env.SERVER_HOST,
    Port: parseInt(process.env.SERVER_PORT, 10),
  },
  SendgridApiKey: process.env.SENDGRID_API_KEY,
  Database: {
    Host: process.env.DATABASE_HOSTT,
    Name: process.env.DATABASE_NAME,
    Username: process.env.DATABASE_USERNAMEE,
    Password: process.env.DATABASE_PASSWORDD,
    Min: parseInt(process.env.DATABASE_POOL_MIN, 10),
    Max: parseInt(process.env.DATABASE_POOL_MAX, 10),
    Idle: parseInt(process.env.DATABASE_POOL_IDLE, 10),
  },

  Auth: {
    EncryptionKey: process.env.AUTH_ENCRYPTION_KEY,
    Jwt: {
      PrivateKey: process.env.AUTH_PRIVATE_KEY,
      PublicKey: process.env.AUTH_PUPLIC_KEY,
      Lifespan: process.env.AUTH_ACCESS_TOKEN_LIFESPAN,
      Issuer: process.env.AUTH_JWT_ISSUER,
      Audience: process.env.AUTH_JWT_AUDIENCE,
      RefreshTokenSpan: process.env.AUTH_REFRESH_TOKEN_LIFESPAN,
    },
  },
}));
