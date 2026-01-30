import { IsString, Length } from 'class-validator';

export class RegisterDto {
  @IsString()
  @Length(5, 10)
  name: string;

  @IsString()
  @Length(5, 10)
  password: string;

  @IsString()
  @Length(5, 10)
  email: string;
}
