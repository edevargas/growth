import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrowthAreasService } from './growth-areas.service';
import { GrowthArea } from "@flab/api-data";

@Controller('growth-areas')
export class GrowthAreasController {
  constructor(private readonly areasService: GrowthAreasService) {}

  @Post()
  create(@Body() createAreaDto: GrowthArea) {
    return this.areasService.create(createAreaDto);
  }

  @Get()
  findAll() {
    return this.areasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.areasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAreaDto: Partial<GrowthArea>) {
    return this.areasService.update(+id, updateAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.areasService.remove(+id);
  }
}
