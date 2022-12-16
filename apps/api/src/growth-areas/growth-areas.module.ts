import { Module } from '@nestjs/common';
import { GrowthAreasService } from './growth-areas.service';
import { GrowthAreasController } from './growth-areas.controller';

@Module({
  controllers: [GrowthAreasController],
  providers: [GrowthAreasService]
})
export class AreasModule {}
