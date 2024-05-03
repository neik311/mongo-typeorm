import { DataSource } from 'typeorm'
require('dotenv').config()

export const dataSource = new DataSource({
  type: 'mongodb',
  url: 'mongodb+srv://nvkien:g8lrw5mxuy6q68Xe@qluser.qf9zv.mongodb.net/apeLog?retryWrites=true&w=majority',
  synchronize: true,
  logging: process.env.TYPEORM_LOGGING == 'true',
  entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
})
