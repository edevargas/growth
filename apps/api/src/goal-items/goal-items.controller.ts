import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoalItem } from '@flab/api-data';
import { GoalItemsService } from './goal-items.service';

@Controller('goal-items')
export class GoalItemsController {
  constructor(private readonly goalItemsService: GoalItemsService) {}

  @Post()
  create(@Body() createGoalItemDto: GoalItem) {
    return this.goalItemsService.create(createGoalItemDto);
  }

  @Get()
  findAll() {
    return this.goalItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goalItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoalItemDto: Partial<GoalItem>) {
    return this.goalItemsService.update(+id, updateGoalItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goalItemsService.remove(+id);
  }
}
