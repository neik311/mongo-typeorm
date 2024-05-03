import { Repository } from 'typeorm'
import { LogEntity } from '../entities'
import { CustomRepository } from '../typeorm'
@CustomRepository(LogEntity)
export class LogRepository extends Repository<LogEntity> {}
