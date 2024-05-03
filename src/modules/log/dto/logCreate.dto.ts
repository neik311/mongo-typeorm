import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class LogCreateDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  projectCode: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  projectName: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  username: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  message: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  status: string
}
