import { INTERVAL_TYPE } from "../enums/interval-type.enum";
export interface Goal {
  id: string;
  name: string;
  description: string;
  startDate?: Date;
  dueDate?: Date;
  progress: number;
  userId: string;
  growthAreaId: string;
  interval?: number;
  intervalType?: INTERVAL_TYPE;
}
