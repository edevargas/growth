import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../../models/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  model = 'goals';

  constructor(private http: HttpClient, @Inject("apiUrl") private apiUrl: string) {}

  findAll() {
    return this.http.get<Goal[]>(this.getUrl());
  }

  findById(id: string) {
    return this.http.get<Goal>(this.getUrlWithId(id));
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
