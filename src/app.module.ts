import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb://localhost:27018/products-nest-tutorial')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
