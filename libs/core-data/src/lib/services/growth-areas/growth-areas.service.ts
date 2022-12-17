import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrowthArea } from '../../models/growth-area';

@Injectable({
  providedIn: 'root'
})
export class GrowthAreasService {

  model = 'growth-areas';

  constructor(private http: HttpClient, @Inject("apiUrl") private apiUrl: string) {}

  findAll() {
    return this.http.get<GrowthArea[]>(this.getUrl());
  }

  findById(id: string) {
    return this.http.get<GrowthArea>(this.getUrlWithId(id));
  }

  create(growthArea: Partial<GrowthArea>) {
    return this.http.post(this.getUrl(), growthArea);
  }

  update(gowthAreaId: string, growthArea: Partial<GrowthArea>) {
    return this.http.put(this.getUrlWithId(gowthAreaId), growthArea);
  }

  delete(gowthAreaId: string) {
    return this.http.delete(this.getUrlWithId(gowthAreaId));
  }

  private getUrl() {
    return `${this.apiUrl}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
