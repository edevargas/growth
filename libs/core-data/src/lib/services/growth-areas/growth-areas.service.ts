import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrowthArea as GrowthAreaApi } from '@flab/api-data';
import { GrowthArea } from '../../models/growth-area';
import { map } from 'rxjs';
import { mapGrowthAreaFromApiToLocalGrowthArea } from '../../mappers/growth-areas.mapper';

@Injectable({
  providedIn: 'root'
})
export class GrowthAreasService {

  model = 'growth-areas';

  constructor(private http: HttpClient, @Inject("apiUrl") private apiUrl: string) {}

  findAll() {
    return this.http.get<GrowthAreaApi[]>(this.getUrl())
      .pipe(map(this.maptoLocalGrowthAreasArray));
  }

  findById(id: string) {
    return this.http.get<GrowthAreaApi>(this.getUrlWithId(id))
      .pipe(map(mapGrowthAreaFromApiToLocalGrowthArea));
  }

  create(growthArea: Partial<GrowthArea>) {
    return this.http.post<GrowthAreaApi>(this.getUrl(), growthArea)
      .pipe(map(mapGrowthAreaFromApiToLocalGrowthArea));
  }

  update(gowthAreaId: string, growthArea: Partial<GrowthArea>) {
    return this.http.put<GrowthAreaApi>(this.getUrlWithId(gowthAreaId), growthArea)
    .pipe(map(mapGrowthAreaFromApiToLocalGrowthArea));
  }

  delete(gowthAreaId: string) {
    return this.http.delete(this.getUrlWithId(gowthAreaId));
  }

  maptoLocalGrowthAreasArray(growthAreas: GrowthAreaApi[]) {
    return growthAreas.map(mapGrowthAreaFromApiToLocalGrowthArea);
  }

  private getUrl() {
    return `${this.apiUrl}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
