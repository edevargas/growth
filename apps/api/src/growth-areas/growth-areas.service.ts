import { GrowthArea } from '@flab/api-data';
import { apiMocks } from '@flab/utils';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class GrowthAreasService {

  growthAreasMock = apiMocks.growthAreasMock;

  create(growthArea: GrowthArea) {
    this.growthAreasMock = [...this.growthAreasMock, Object.assign({}, growthArea, { id: uuidv4() })];
    return this.growthAreasMock;
  }

  findAll() {
    return this.growthAreasMock;
  }

  findOne(id: string) {
    return this.growthAreasMock.find((growthArea) => growthArea.id === id);
  }

  update(id: string, growthAreaUpdate: Partial<GrowthArea>) {
    this.growthAreasMock = this.growthAreasMock.map((growthArea) => (growthArea.id === id ? {...growthArea, ...growthAreaUpdate,} : growthArea));
    return this.growthAreasMock;
  }

  remove(id: string) {
    this.growthAreasMock = this.growthAreasMock.filter((growthArea) => growthArea.id !== id);
    return this.growthAreasMock;
  }
}
