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
  intervalType?: INTERVAL_TYPE;
}
