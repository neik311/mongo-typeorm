import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config/dist/config.module'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { TrimInterceptor } from '../interceptores'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LogModule } from './log/log.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LogEntity } from '../entities'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // LogModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TrimInterceptor,
    },
  ],
})
export class AppModule {}
