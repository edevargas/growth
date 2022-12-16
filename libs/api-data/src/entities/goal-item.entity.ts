import { INTERVAL_TYPE } from "../enums/interval-type.enum";
import { ApiProperty } from '@nestjs/swagger';
export class GoalItem {
  @ApiProperty({ example: '9322c384-fd8e-4a13-80cd-1cbd1ef95ba8', description: "uuid"})
  id: string;

  name: string;
  description: string;
  startDate?: Date;
  dueDate?: Date;
  progress: number;

  @ApiProperty({ example: '9322c384-fd8e-4a13-80cd-1cbd1ef95ba8', description: "uuid"})
  goalId: string;
  interval?: number;

  @ApiProperty({ enum: Object.keys(INTERVAL_TYPE) })
  intervalType?: INTERVAL_TYPE;
}
