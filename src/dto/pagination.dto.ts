import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsObject, IsOptional } from 'class-validator'

/** Interface phân trang */
export class PaginationDto {
  @ApiProperty({ description: 'Điều kiện lọc', example: { code: 'xxxx', name: 'xxx xxxx xxxx' } })
  @IsObject()
  @IsOptional()
  where?: any

  @ApiProperty({ description: 'Số record bỏ qua', example: 0 })
  @IsNumber()
  skip: number

  @ApiProperty({ description: 'Số record lấy', example: 10 })
  @IsNumber()
  take: number
}
