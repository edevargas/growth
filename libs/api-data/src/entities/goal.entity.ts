import { INTERVAL_TYPE } from "../enums/interval-type.enum";
import { ApiProperty } from '@nestjs/swagger';
import { GOAL_STATE } from "../enums";

export class Goal {
  @ApiProperty({ example: '9322c384-fd8e-4a13-80cd-1cbd1ef95ba8', description: "uuid"})
  id: string;
  @ApiProperty({ example: '9322c384-fd8e-4a13-80cd-1cbd1ef95ba8', description: "uuid"})
  goalParentId?: string;
  @ApiProperty({ example: '9322c384-fd8e-4a13-80cd-1cbd1ef95ba8', description: "uuid"})
  userId: string;
  @ApiProperty({ example: '9322c384-fd8e-4a13-80cd-1cbd1ef95ba8', description: "uuid"})
  growthAreaId: string;
  @ApiProperty({ enum: Object.keys(INTERVAL_TYPE) })
  intervalType?: INTERVAL_TYPE;

  interval?: number;
  name: string;
  description: string;
  startDate?: Date;
  dueDate?: Date;
  progress: number;
  state: GOAL_STATE;
}
