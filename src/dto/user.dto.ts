import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsUUID } from 'class-validator'

/** Interface user */
export class UserDto {
  @ApiProperty({ description: 'Id user', example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' })
  @IsUUID()
  id: string

  @ApiProperty({ description: 'Tài khoản', example: 'userX' })
  @IsString()
  username: string

  @ApiProperty({ description: 'Loại tài khoản' })
  @IsString()
  type: string

  @ApiProperty({ description: 'Id nhân viên', example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' })
  employeeId: string

  @ApiProperty({ description: 'Id tài xế', example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' })
  driverId: string

  @ApiProperty({ description: 'Id đối tác', example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' })
  tenantId: string

  @ApiProperty({ description: 'Id vai trò', example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' })
  roleId: string

  @ApiProperty({ description: 'Là admin?', example: 'false' })
  isAdmin: boolean
}
