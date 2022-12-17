import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GoalItem } from '@flab/api-data';
import { apiMocks } from '@flab/utils';

import { GoalItemsService } from './goal-items.service';

describe('GoalItemsService', () => {
  let service: GoalItemsService;
  let httpClientMock: HttpTestingController;
  const allMocks = apiMocks.GOAL_ITEMS_MOCK;
  const apiUrl = "http://localhost:3333/api";
  const model = "goal-items";
  const newGoalItem = {
    name: "New Goal Item",
    description: "Simple description / New Goal item",
    progress: 5,
    goalId: "g1",
    dueDate: new Date(2023, 3, 30)
  };

  function getUrl() {
    return `${apiUrl}/${model}`;
  }

  function getUrlWithId(id: string) {
    return `${getUrl()}/${id}`;
  }


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GoalItemsService,
        {provide: "apiUrl", useValue: apiUrl},
      ]
  });
    service = TestBed.inject(GoalItemsService);
    httpClientMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should retrieve all goal itemss", () => {
    service.findAll()
        .subscribe( goals => {

            expect(goals).toBeTruthy();
            expect(goals.length).toBe(allMocks.length);
            const firstGoal = goals.find(goal => goal.id === allMocks[0].id )
            expect(firstGoal?.name).toBe(allMocks[0].name)
        })
    const req = httpClientMock.expectOne(getUrl());
    req.flush({ payload: Object.values(apiMocks.GOALS_MOCK)}); //Only when flush is called the Http Client will simulate data
    expect(req.request.method).toEqual("GET");

});

it('should find a goal item by id', () => {

  service.findById(allMocks[0].id)
      .subscribe(goalItem => {
          expect(goalItem).toBeTruthy();
          expect(goalItem.id).toBe(allMocks[0].id);

      });

  const req = httpClientMock.expectOne(getUrlWithId(allMocks[0].id));

  expect(req.request.method).toEqual("GET");

  req.flush(allMocks[0]);

});

it('should find a goal item by goal Id', () => {
  const goalId = "g1";
  service.findByGoalId(goalId)
      .subscribe(goalItems => {
          expect(goalItems).toBeTruthy();
          const goalItemsByGoalId = allMocks.filter( g => g.goalId === goalId);
          expect(goalItems.length).toBe(goalItemsByGoalId.length);
          const userGoalIdx = goalItemsByGoalId.findIndex(g => g.id === goalItems[0].id);
          expect(goalItems[0].name).toBe(goalItemsByGoalId[userGoalIdx].name);

      });

  const req = httpClientMock.expectOne(`${getUrl()}/goal/${goalId}`);

  expect(req.request.method).toEqual("GET");

  req.flush(allMocks.filter( gi => gi.goalId === goalId));

});

it('should create the goal item data', () => {

  service.create(newGoalItem)
      .subscribe(response => {
        const goal = response as GoalItem;
        expect(goal.id).toBeTruthy();

      });

  const req = httpClientMock.expectOne(getUrl());

  expect(req.request.method).toEqual("POST");

  expect(req.request.body.description)
      .toEqual(newGoalItem.description);

  req.flush({
      ...newGoalItem,
      id: "g1235"
  })

});

it('should update the goal item data', () => {

  const changes: Partial<GoalItem> ={ description: "Description Edited" };

  service.update(allMocks[0].id, changes)
      .subscribe(response => {
        const goal = response as GoalItem;
        expect(goal.id).toBe(allMocks[0].id);

      });

  const req = httpClientMock.expectOne(getUrlWithId(allMocks[0].id));

  expect(req.request.method).toEqual("PUT");

  expect(req.request.body.description)
      .toEqual(changes.description);

  req.flush({
      ...allMocks[0],
      ...changes
  })

});

it('should give an error if save goal item fails', () => {

  const changes: Partial<GoalItem> ={ description: "Description Edited" };

  service.update(allMocks[0].id, changes)
  .subscribe({
    next: () => fail("the save goal item operation should have failed"),
    error: (error: HttpErrorResponse) => expect(error.status).toBe(500)
  });

  const req = httpClientMock.expectOne(getUrlWithId(allMocks[0].id));
  expect(req.request.method).toEqual("PUT");
  expect(req.request.body.description)
      .toEqual(changes.description);

      req.flush('Save goal item failed', {status:500,
        statusText:'Internal Server Error'});

});

afterEach(() => {
  httpClientMock.verify();
});

});
