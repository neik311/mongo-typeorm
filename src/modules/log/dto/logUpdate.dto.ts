import { IsNotEmpty, IsUUID } from 'class-validator'
import { LogCreateDto } from './logCreate.dto'
import { ApiProperty } from '@nestjs/swagger'
import { ObjectId } from 'mongodb'

export class LogUpdateDto extends LogCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  _id: ObjectId
}
