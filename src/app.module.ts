import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017/test"), EventModule, TodoModule],
  //controllers: [EventController],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
