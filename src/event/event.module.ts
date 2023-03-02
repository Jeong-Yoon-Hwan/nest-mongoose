import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventSchema, Event } from './schemas/event.schema';
import { EventService } from './event.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  providers: [EventService],
  controllers: [EventController],
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
  ],
})
export class EventModule {}