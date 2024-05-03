import { Injectable } from '@nestjs/common'
import { coreHelper } from '../helpers'

@Injectable()
export class AppService {
  /** Kiểm tra tình trạng server */
  healthCheck() {
    return 'This server is healthy.'
  }

  /** Kiểm tra thời gian theo timezone của server */
  checkTimeZone() {
    const newDate = new Date()
    const newDateTz = coreHelper.newDateTZ()

    return `newDate: ${newDate}\nnewDateTZ+7: ${newDateTz}`
  }
}
