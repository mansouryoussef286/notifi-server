import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import Configuration from '@App/Config/Configuration';
import {
  IsString,
  ValidateNested,
  ValidationError,
  validate,
} from 'class-validator';
import { Server } from './Types';
import { Type, plainToClass } from 'class-transformer';

export class Config {
  @IsString()
  Env: string;

  @IsString()
  Version: string;

  @ValidateNested()
  @Type(() => Server)
  Server: Server;

  @IsString()
  SendgridApiKey: string;

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
  ) {
    this.validateConfig();
  }

  async validateConfig() {
    const configDto = plainToClass(Config, this.Config);
    try {
      const errors: ValidationError[] = await validate(configDto);
      if (errors.length > 0) {
        console.error('Validation errors in the .env file:');
        this.displayValidationErrors(errors);
        process.exit(1); // Terminate the application if configuration is not valid
      }
    } catch (e) {
      console.error('An error occurred during validation:', e);
      process.exit(1); // Terminate the application if an error occurs
    }
  }

  displayValidationErrors(errors: ValidationError[]) {
    // console.log(errors);

    errors.forEach((error) => {
      let errorText: string = `${error.property} is not valid:`;

      // error constraints
      Object.values(error.constraints ?? {}).forEach((constraint) => {
        errorText += `\n ${constraint}`;
      });

      // property children
      error.children?.forEach((child) => {
        errorText += handleChildren(child);
      });

      // log the errors
      console.log('\n' + errorText);
    });

    function handleChildren(child: ValidationError): string {
      let retval = '';
      Object.values(child.constraints ?? {}).forEach((constraint) => {
        retval += `\n ${constraint}`;
      });

      // recurse for nested children
      child.children?.forEach((child) => {
        retval += handleChildren(child);
      });
      return retval;
    }
  }
}
