import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import Configuration from '@App/Config/Configuration';
import { IsString, ValidateNested } from 'class-validator';
import { Server } from './Types';
import { Type } from 'class-transformer';

export class Config {
  @IsString()
  Env: string;

  @IsString()
  Version: string;

  @ValidateNested()
  @Type(() => Server)
  Server: Server;
  
  Database: {
    Host: string;
    Name: string;
    Username: string;
    Password: string;
    Min: number;
    Max: number;
    Idle: number;
  };
  Auth: {
    EncryptionKey: string;
    Jwt: {
      PrivateKey: string;
      PublicKey: string;
      Lifespan: string;
      RefreshTokenSpan: string;
      Issuer: string;
      Audience: string;
    };
  };
}

@Injectable()
export class AppConfig {
  constructor(
    @Inject(Configuration.KEY)
    public Config: ConfigType<typeof Configuration>,
  ) {}
}
