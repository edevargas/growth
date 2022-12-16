import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Goal } from '@flab/api-data';
import { GoalsService } from './goals.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('goals')
@ApiTags('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  create(@Body() createGoalDto: Goal) {
    return this.goalsService.create(createGoalDto);
  }

  @Get()
  findAll() {
    return this.goalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goalsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoalDto: Partial<Goal>) {
    return this.goalsService.update(id, updateGoalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goalsService.remove(id);
  }
}
