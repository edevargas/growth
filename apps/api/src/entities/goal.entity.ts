import { GrowthArea } from "./growth-area.entity";

export class Goal {
  id: string;
  name: string;
  description: string;
  finalDueDate: string;
  dueDates: Date[];
  progress: number;
  userId: string;
  area: GrowthArea;
}
