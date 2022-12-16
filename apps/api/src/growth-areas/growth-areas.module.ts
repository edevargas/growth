import { Module } from '@nestjs/common';
import { AreasService } from './growth-areas.service';
import { AreasController } from './growth-areas.controller';

@Module({
  controllers: [AreasController],
  providers: [AreasService]
})
export class AreasModule {}
