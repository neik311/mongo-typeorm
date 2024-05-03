import { Injectable } from '@nestjs/common'
import { CREATE_SUCCESS, ERROR_NOT_FOUND_DATA, UPDATE_SUCCESS } from '../../constants'
import { PaginationDto } from '../../dto'
import { LogCreateDto, LogUpdateDto } from './dto'
import { LogRepository } from '../../repositories'
import { FindOptionsWhere, Like } from 'typeorm'
import { LogEntity } from '../../entities'

@Injectable()
export class LogService {
  constructor(private repo: LogRepository) {}
  /** Phân trang */
  async pagination(data: PaginationDto) {
    const whereCon: FindOptionsWhere<LogEntity> = {}
    if (data.where.projectCode) whereCon.projectCode = Like(`%${data.where.projectCode}%`)
    if (data.where.projectName) whereCon.projectName = Like(`%${data.where.projectName}%`)
    if (data.where.username) whereCon.username = Like(`%${data.where.username}%`)

    const res = await this.repo.findAndCount({
      where: whereCon,
      order: { createdAt: 'DESC' },
      skip: data.skip,
      take: data.take,
    })
    return res
  }
  /** Thêm mới */
  async createData(data: LogCreateDto) {
    const newLog = this.repo.create(data)
    newLog.createdAt = new Date()
    await this.repo.insert(newLog)
    return { message: CREATE_SUCCESS }
  }
  /** Cập nhật */
  async updateData(data: LogUpdateDto) {
    const foundLog = await this.repo.findOne({ where: { _id: data._id as any } })
    if (!foundLog) throw new Error(ERROR_NOT_FOUND_DATA)
    foundLog.projectCode = data.projectCode
    foundLog.projectName = data.projectName
    foundLog.username = data.username
    foundLog.message = data.message
    foundLog.status = data.status
    foundLog.updatedAt = new Date()
    await this.repo.update({ _id: data._id as any }, foundLog)
    return { message: UPDATE_SUCCESS }
  }
}
