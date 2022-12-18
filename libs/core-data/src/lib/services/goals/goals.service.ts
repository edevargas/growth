import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Goal } from '@flab/api-data';
import { filter, map, tap } from 'rxjs';
import { mapGoalFromApiToLocalGoal } from '../../mappers';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  model = 'goals';

  constructor(private http: HttpClient, @Inject("apiUrl") private apiUrl: string) {}

  findAll() {
    return this.http.get<Goal[]>(this.getUrl())
      .pipe(map( goals => goals.map(mapGoalFromApiToLocalGoal)));
  }

  findById(id: string) {
    return this.http.get<Goal>(this.getUrlWithId(id))
    .pipe(map( goal => mapGoalFromApiToLocalGoal(goal)));
  }

  findAllByUserId(userId: string) {
    return this.http.get<Goal[]>(`${this.getUrl()}/user/${userId}`)
    .pipe(map( goals => goals.map(mapGoalFromApiToLocalGoal)));;
  }

  findFirstClassGoalsByUserId(userId: string) {
    return this.http.get<Goal[]>(`${this.getUrl()}/user/${userId}/first-class`)
    .pipe(
      filter( goals => goals && goals.length > 0),
      map( goals =>  goals.map(mapGoalFromApiToLocalGoal)));
  }

  findGoalChildren(goalId: string) {
    return this.http.get<Goal[]>(`${this.getUrlWithId(goalId)}/children`)
    .pipe(map( goals => goals.map(mapGoalFromApiToLocalGoal)));
  }

  create(goal: Partial<Goal>) {
    return this.http.post(this.getUrl(), goal);
  }

  update(goalId: string, goal: Partial<Goal>) {
    return this.http.put(this.getUrlWithId(goalId), goal);
  }

  delete(goalId: string) {
    return this.http.delete(this.getUrlWithId(goalId));
  }

  private getUrl() {
    return `${this.apiUrl}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
