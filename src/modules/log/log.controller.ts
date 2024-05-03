import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { PaginationDto } from '../../dto'
import { TmsAuthGuard } from '../common/guards'
import { LogService } from './log.service'
import { LogCreateDto, LogUpdateDto } from './dto'

@ApiBearerAuth()
@ApiTags('Log')
@UseGuards(TmsAuthGuard)
@Controller('log')
export class LogController {
  constructor(private readonly service: LogService) {}
  @ApiOperation({ summary: 'Phân trang danh sách' })
  @Post('pagination')
  async pagination(@Body() data: PaginationDto) {
    return await this.service.pagination(data)
  }
  @ApiOperation({ summary: 'Tạo mới' })
  @Post('create_data')
  async createData(@Body() data: LogCreateDto) {
    return await this.service.createData(data)
  }
  @ApiOperation({ summary: 'Cập nhật' })
  @Post('update_data')
  async updateData(@Body() data: LogUpdateDto) {
    return await this.service.updateData(data)
  }
}
