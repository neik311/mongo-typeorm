import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { json, urlencoded } from 'express'
import { AppModule } from './modules/app.module'
import { AllExceptionsFilter } from './modules/common/filters'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const port = configService.get<string>('PORT')
  app.enableCors()

  app.use(json({ limit: '10mb' }))
  app.use(urlencoded({ extended: true, limit: '10mb' }))

  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.useGlobalFilters(new AllExceptionsFilter())

  const options = new DocumentBuilder().setTitle('Document API').setVersion('').addBearerAuth().build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(port || 3300)
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
