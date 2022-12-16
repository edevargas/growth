import { INTERVAL_TYPE } from "../enums/interval-type.enum";

export interface GoalItem {
  id: string;
  name: string;
  description: string;
  startDate?: Date;
  dueDate?: Date;
  progress: number;
  goalId: string;
  interval?: number;
  intervalType?: INTERVAL_TYPE;
}
