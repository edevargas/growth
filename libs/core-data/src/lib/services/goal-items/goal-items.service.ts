import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { GoalItem } from '@flab/api-data';

@Injectable({
  providedIn: 'root'
})
export class GoalItemsService {

  model = 'goal-items';

  constructor(private http: HttpClient, @Inject("apiUrl") private apiUrl: string) {}

  findAll() {
    return this.http.get<GoalItem[]>(this.getUrl());
  }

  findById(id: string) {
    return this.http.get<GoalItem>(this.getUrlWithId(id));
  }

  findByGoalId(goalId: string) {
    return this.http.get<GoalItem[]>(`${this.getUrl()}/goal/${goalId}`);
  }


  create(goalItem: Partial<GoalItem>) {
    return this.http.post(this.getUrl(), goalItem);
  }

  update(goalItemId: string, goalItem: Partial<GoalItem>) {
    return this.http.put(this.getUrlWithId(goalItemId), goalItem);
  }

  delete(goalItemId: string) {
    return this.http.delete(this.getUrlWithId(goalItemId));
  }

  private getUrl() {
    return `${this.apiUrl}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
