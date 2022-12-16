import { Injectable } from '@nestjs/common';
import { Area } from '../entities'
@Injectable()
export class AreasService {
  create(createAreaDto: Area) {
    return 'This action adds a new area';
  }

  findAll() {
    return `This action returns all areas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} area`;
  }

  update(id: number, updateAreaDto: Partial<Area>) {
    return `This action updates a #${id} area`;
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
