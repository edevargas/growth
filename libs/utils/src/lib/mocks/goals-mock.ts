import { enums, Goal } from "@flab/api-data";

export const GOALS_MOCK: { [id: string] : Goal; }  = {
  "g1": {
    id: "g1",
    name: "Study Sowftware Architecture",
    description: "Simple description / SA",
    userId: "u1",
    progress: 5,
    growthAreaId: "a1",
    dueDate: new Date(2023, 3, 30),
    state: enums.GOAL_STATE.inprogress
  },
  "g2":{
    id: "g2",
    name: "Learn English",
    description: "Simple description English",
    userId: "u1",
    progress: 10,
    growthAreaId: "a1",
    dueDate: new Date(2023, 3, 30),
    state: enums.GOAL_STATE.inprogress
  },
  "g3": {
    id: "g3",
    name: "Workout",
    description: "Simple description / Workout",
    userId: "u1",
    progress: 10,
    growthAreaId: "a2",
    startDate: new Date(2022,10, 1),
    dueDate: new Date(2023, 11, 30),
    state: enums.GOAL_STATE.inprogress
  },
  "i1":{
    id: "i1",
    name: "Read DDD",
    description: "Simple description / DDD",
    progress: 5,
    goalParentId: "g1",
    dueDate: new Date(2023, 3, 30),
    growthAreaId: "a1",
    userId: "u1",
    state: enums.GOAL_STATE.inprogress
  },
  "i2":{
    id: "i2",
    name: "Study about CDD",
    description: "Simple description CDD",
    progress: 10,
    goalParentId: "g1",
    dueDate: new Date(2023, 3, 30),
    growthAreaId: "a1",
    userId: "u1",
    state: enums.GOAL_STATE.onhold
  },
  "i3":{
    id: "i3",
    name: "Legs",
    description: "Do legs",
    progress: 0,
    goalParentId: "g3",
    dueDate: new Date(2023, 3, 30),
    interval: 1,
    intervalType: enums.INTERVAL_TYPE.weekly,
    growthAreaId: "a2",
    userId: "u1",
    state: enums.GOAL_STATE.inprogress
  },
  "i4":{
    id: "i4",
    name: "Upper trunk",
    description: "Do upper trunk",
    progress: 0,
    goalParentId: "g3",
    dueDate: new Date(2023, 3, 30),
    interval: 1,
    intervalType: enums.INTERVAL_TYPE.weekly,
    growthAreaId: "a2",
    userId: "u1",
    state: enums.GOAL_STATE.inprogress
  },
  "i5": {
    id: "i5",
    name: "Run",
    description: "Just run",
    progress: 0,
    goalParentId: "g3",
    dueDate: new Date(2023, 3, 30),
    interval: 1,
    intervalType: enums.INTERVAL_TYPE.weekly,
    growthAreaId: "a2",
    userId: "u1",
    state: enums.GOAL_STATE.inprogress
  },
  "i6": {
    id: "i6",
    name: "Practice talking",
    description: "talk",
    progress: 0,
    goalParentId: "g2",
    dueDate: new Date(2023, 11, 30),
    interval: 2,
    intervalType: enums.INTERVAL_TYPE.weekly,
    growthAreaId: "a1",
    userId: "u1",
    state: enums.GOAL_STATE.inprogress
  },
  "i7": {
    id: "i7",
    name: "Practice listening",
    description: "Watch a serie without subtitles",
    progress: 0,
    goalParentId: "g2",
    dueDate: new Date(2023, 11, 30),
    interval: 2,
    intervalType: enums.INTERVAL_TYPE.weekly,
    growthAreaId: "a1",
    userId: "u1",
    state: enums.GOAL_STATE.inprogress
  }
}
