import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Goal as GoalApi } from '@flab/api-data';
import { map } from 'rxjs';
import { mapGoalFromApiToLocalGoal } from '../../mappers/goals.mapper';
import { Goal } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  model = 'goals';

  constructor(private http: HttpClient, @Inject("apiUrl") private apiUrl: string) {}

  findAll() {
    return this.http.get<GoalApi[]>(this.getUrl())
      .pipe(map(this.maptoLocalGoalsArray));
  }

  findById(id: string) {
    return this.http.get<GoalApi>(this.getUrlWithId(id))
    .pipe(map(mapGoalFromApiToLocalGoal));
  }

  findAllByUserId(userId: string) {
    return this.http.get<GoalApi[]>(`${this.getUrl()}/user/${userId}`)
    .pipe(map(this.maptoLocalGoalsArray));
  }

  findFirstClassGoalsByUserId(userId: string) {
    return this.http.get<GoalApi[]>(`${this.getUrl()}/user/${userId}/first-class`)
    .pipe(map(this.maptoLocalGoalsArray));
  }

  findGoalChildren(goalId: string) {
    return this.http.get<GoalApi[]>(`${this.getUrlWithId(goalId)}/children`)
    .pipe(map(this.maptoLocalGoalsArray));
  }

  create(goal: Partial<Goal>) {
    return this.http.post<GoalApi>(this.getUrl(), goal)
    .pipe(map(mapGoalFromApiToLocalGoal));
  }

  update(goalId: string, goal: Partial<Goal>) {
    return this.http.put<GoalApi>(this.getUrlWithId(goalId), goal)
    .pipe(map(mapGoalFromApiToLocalGoal));
  }

  delete(goalId: string) {
    return this.http.delete(this.getUrlWithId(goalId));
  }

  maptoLocalGoalsArray(goals: GoalApi[]) {
    return goals.map(mapGoalFromApiToLocalGoal);
  }

  private getUrl() {
    return `${this.apiUrl}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
