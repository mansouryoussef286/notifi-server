import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';

export class Server {
  @IsString()
  Host: string;

  @IsNumber()
  Port: number;
}
