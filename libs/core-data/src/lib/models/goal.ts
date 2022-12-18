import { enums } from "@flab/api-data";

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
  intervalType?: enums.INTERVAL_TYPE;
  goalParentId?: string;
  state: enums.GOAL_STATE;

}
