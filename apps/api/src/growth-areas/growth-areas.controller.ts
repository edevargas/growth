import { GrowthArea } from "@flab/api-data";
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GrowthAreasService } from './growth-areas.service';

@Controller('growth-areas')
@ApiTags('growth-areas')
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
    return this.areasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAreaDto: Partial<GrowthArea>) {
    return this.areasService.update(id, updateAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.areasService.remove(id);
  }
}
