import { Module } from '@nestjs/common';
import { GoalsModule } from '../goals/goals.module';
import { GrowthAreasModule } from '../growth-areas/growth-areas.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GoalsModule,
    GrowthAreasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
