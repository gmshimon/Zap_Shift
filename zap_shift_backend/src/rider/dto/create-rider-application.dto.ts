import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateRiderApplicationDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsString()
  district?: string;

  @IsString()
  nidNumber: string;

  @IsString()
  drivingLicenseNumber: string;

  @IsString()
  bikeBrandModelYear: string;

  @IsString()
  bikeRegistrationNumber: string;

  @IsOptional()
  @IsString()
  note?: string;
}
