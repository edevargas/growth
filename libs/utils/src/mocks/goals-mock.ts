import { Goal } from "@flab/api-data";

export const GOALS_MOCK: Goal[] = [
  {
    id: "g1",
    name: "Study Sowftware Architecture",
    description: "Simple description / SA",
    userId: "u1",
    progress: 5,
    growthAreaId: "a1",
    dueDate: new Date(2023, 3, 30)
  },
  {
    id: "g2",
    name: "Learn English",
    description: "Simple description English",
    userId: "u1",
    progress: 10,
    growthAreaId: "a1",
    dueDate: new Date(2023, 3, 30)
  },
  {
    id: "g3",
    name: "Workout",
    description: "Simple description / Workout",
    userId: "u1",
    progress: 10,
    growthAreaId: "a2",
    startDate: new Date(2022,10, 1),
    dueDate: new Date(2023, 11, 30)
  }
]
