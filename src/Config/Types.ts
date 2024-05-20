import { IsNumber, IsString } from 'class-validator';

export class Server {
  @IsString()
  Host: string;
  
  @IsNumber()
  Port: number;
}
