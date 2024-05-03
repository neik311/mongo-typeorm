import { DataSource } from 'typeorm'
require('dotenv').config()

export const dataSource = new DataSource({
  type: 'mongodb',
  url: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@qluser.qf9zv.mongodb.net/${process.env.MONGO_COLLECTION}?retryWrites=true&w=majority`,
  synchronize: true,
  logging: process.env.TYPEORM_LOGGING == 'true',
  entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
})
