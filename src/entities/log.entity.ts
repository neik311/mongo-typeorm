import { ObjectId } from 'mongodb'
import { Column, Entity, ObjectIdColumn, OneToMany } from 'typeorm'

/** Khu vực */
@Entity('log')
export class LogEntity {
  @ObjectIdColumn({ name: '_id' })
  _id: ObjectId

  @Column()
  projectCode: string

  @Column()
  projectName: string

  @Column()
  username: string

  @Column()
  message: string

  @Column()
  status: string

  @Column()
  createdAt: Date

  @Column({ type: 'text', nullable: true })
  updatedAt: Date
}
