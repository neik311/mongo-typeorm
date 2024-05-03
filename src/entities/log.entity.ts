import { ObjectId } from 'mongodb'
import { Column, Entity, ObjectIdColumn } from 'typeorm'

/** Khu vực */
@Entity('log')
export class LogEntity {
  @ObjectIdColumn()
  _id: ObjectId

  @Column({ type: 'varchar', length: 50 })
  projectCode: string

  @Column({ type: 'varchar', length: 250 })
  projectName: string

  @Column({ type: 'varchar', length: 250 })
  username: string

  @Column({ type: 'text', nullable: true })
  message: string

  @Column({ type: 'varchar', length: 250 })
  status: string

  @Column()
  createdAt: Date

  @Column({ type: 'text', nullable: true })
  updatedAt: Date
}
