import { BaseEventDto } from "./base-event.dto";

export class UpdateEventDto extends BaseEventDto {
  completedAt: Date;
}