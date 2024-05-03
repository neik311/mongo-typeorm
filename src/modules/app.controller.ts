import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiBearerAuth()
@ApiTags('')
@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @ApiOperation({ summary: 'Kiểm tra tình trạng server' })
  @ApiResponse({ status: 200, description: 'Trả về tình trạng server' })
  @Get('healthcheck')
  healthCheck() {
    return this.service.healthCheck()
  }

  @ApiOperation({ summary: 'Kiểm tra thời gian theo timezone của server' })
  @ApiResponse({ status: 200, description: 'Giờ server & giờ ở múi giờ 7' })
  @Get('timezone')
  checkTimeZone() {
    return this.service.checkTimeZone()
  }
}
