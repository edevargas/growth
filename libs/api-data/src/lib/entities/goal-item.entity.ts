import { Goal } from "./goal.entity";

export class GoalItem {
  id: string;
  name: string;
  description: string;
  dueDate: Date;
  progress: number;
  goalId: Goal;
}
