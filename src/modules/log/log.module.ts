import { Module } from '@nestjs/common'
import { LogController } from './log.controller'
import { LogService } from './log.service'
import { LogRepository } from '../../repositories'
import { TypeOrmExModule } from '../../typeorm'

@Module({
  imports: [TypeOrmExModule.forCustomRepository([LogRepository])],
  providers: [LogService],
  controllers: [LogController],
})
export class LogModule {}
