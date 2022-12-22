import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { GoalsFacade } from '@fedd/core-state/goals';

@Component({
  selector: 'growth-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent implements OnInit {
  goalsFacade = inject(GoalsFacade);

  goals$ = this.goalsFacade.allGoals$;

  ngOnInit(): void {
    this.goalsFacade.findAllByUserId("u1");
  }


}
