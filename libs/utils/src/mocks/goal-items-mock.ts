import { GoalItem, INTERVAL_TYPE } from "@flab/api-data";

export const goalItemsMock: GoalItem[] = [
  {
    id: "i1",
    name: "Read DDD",
    description: "Simple description / DDD",
    progress: 5,
    goalId: "g1",
    dueDate: new Date(2023, 3, 30)
  },
  {
    id: "i2",
    name: "Study about CDD",
    description: "Simple description CDD",
    progress: 10,
    goalId: "g1",
    dueDate: new Date(2023, 3, 30)
  },
  {
    id: "i2",
    name: "Legs",
    description: "Do legs",
    progress: 0,
    goalId: "g3",
    dueDate: new Date(2023, 3, 30),
    interval: 1,
    intervalType: INTERVAL_TYPE.weekly
  },
  {
    id: "i3",
    name: "Upper trunk",
    description: "Do upper trunk",
    progress: 0,
    goalId: "g3",
    dueDate: new Date(2023, 3, 30),
    interval: 1,
    intervalType: INTERVAL_TYPE.weekly
  },
  {
    id: "i4",
    name: "Run",
    description: "Just run",
    progress: 0,
    goalId: "g3",
    dueDate: new Date(2023, 3, 30),
    interval: 1,
    intervalType: INTERVAL_TYPE.weekly
  },
  {
    id: "i5",
    name: "Practice talking",
    description: "talk",
    progress: 0,
    goalId: "g2",
    dueDate: new Date(2023, 11, 30),
    interval: 2,
    intervalType: INTERVAL_TYPE.weekly
  },
  {
    id: "i6",
    name: "Practice listening",
    description: "Watch a serie without subtitles",
    progress: 0,
    goalId: "g2",
    dueDate: new Date(2023, 11, 30),
    interval: 2,
    intervalType: INTERVAL_TYPE.weekly
  },
]
