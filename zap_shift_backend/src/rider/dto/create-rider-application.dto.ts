import {
  IsString,
  IsEmail,
  IsNumber,
  IsOptional,
  isString,
} from 'class-validator';

export class CreateRiderApplicationDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsNumber()
  regionId?: number;

  @IsOptional()
  @IsNumber()
  districtId?: number;

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
