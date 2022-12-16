import { GrowthArea } from '@flab/api-data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GrowthAreasService {
  create(createAreaDto: GrowthArea) {
    return 'This action adds a new area';
  }

  findAll() {
    return `This action returns all areas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} area`;
  }

  update(id: number, updateAreaDto: Partial<GrowthArea>) {
    return `This action updates a #${id} area`;
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
