import { Goal as GoalApi } from "@flab/api-data";
import { Goal } from "../models/goal";

export function mapGoalFromApiToLocalGoal(goalApi: GoalApi): Goal {
  const goal = new Goal();
  if(goalApi.id) goal.id = goalApi.id;
  if(goalApi.description) goal.description = goalApi.description;
  if(goalApi.dueDate) goal.dueDate = goalApi.dueDate;
  if(goalApi.growthAreaId) goal.growthAreaId = goalApi.growthAreaId;
  if(goalApi.interval) goal.interval = goalApi.interval;
  if(goalApi.intervalType) goal.intervalType = goalApi.intervalType;
  if(goalApi.name) goal.name = goalApi.name;
  if(goalApi.progress) goal.progress = goalApi.progress;
  if(goalApi.startDate) goal.startDate = goalApi.startDate;
  if(goalApi.userId) goal.userId = goalApi.userId;
  if(goalApi.goalParentId) goal.goalParentId = goalApi.goalParentId;
  if(goalApi.state) goal.state = goalApi.state;

  return goal;
}
