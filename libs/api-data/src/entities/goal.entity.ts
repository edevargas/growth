import { INTERVAL_TYPE } from "../enums/interval-type.enum";
import { ApiProperty } from '@nestjs/swagger';

export class Goal {
  id: string;
  name: string;
  description: string;
  startDate?: Date;
  dueDate?: Date;
  progress: number;
  userId: string;
  growthAreaId: string;
  interval?: number;
  @ApiProperty({ enum: Object.keys(INTERVAL_TYPE) })
  intervalType?: INTERVAL_TYPE;
}
