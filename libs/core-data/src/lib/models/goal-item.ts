import { enums } from "@flab/api-data";


export class GoalItem {
  id: string;
  name: string;
  description: string;
  startDate?: Date;
  dueDate?: Date;
  progress: number;
  goalId: string;
  interval?: number;
  intervalType?: enums.INTERVAL_TYPE;
}
