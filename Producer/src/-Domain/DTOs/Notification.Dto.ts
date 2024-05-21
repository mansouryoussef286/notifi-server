import { IsEmail, IsString, IsOptional } from 'class-validator';

export class NotificationDto {
  @IsEmail()
  readonly recipient: string;

  @IsString()
  readonly message: string;

  @IsString()
  @IsOptional()
  readonly subject?: string; // Optional for email notifications
}
