import { TestBed } from '@angular/core/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { enums } from '@flab/api-data';
import { apiMocks } from '@flab/utils';
import { GoalsService } from './goals.service';
import { Goal } from '../../models';

fdescribe('GoalsService', () => {
  let service: GoalsService;
  let httpClientMock: HttpTestingController;
  const allMocks = Object.values(apiMocks.GOALS_MOCK);
  const apiUrl = "http://localhost:3333/api";
  const model = "goals";
  const newGoal =  {
    name: "New Goal",
    description: "Simple description / New Goal",
    userId: "u1",
    progress: 50,
    growthAreaId: "a1",
    dueDate: new Date(2023, 3, 30),
    state: enums.GOAL_STATE.ready
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
        GoalsService,
        {provide: "apiUrl", useValue: apiUrl},
      ]
  });
    service = TestBed.inject(GoalsService);
    httpClientMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(GoalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should retrieve all goals", done => {
    service.findAll()
        .subscribe( goals => {
            expect(goals).toBeTruthy();
            expect(goals.length).toBe(allMocks.length);
            const firstGoalIdx = goals.findIndex(goal => goal.id === allMocks[0].id )
            expect(goals[firstGoalIdx]?.name).toBe(allMocks[0].name);
            done();
        })
    const req = httpClientMock.expectOne(getUrl());
    req.flush(allMocks); //Only when flush is called the Http Client will simulate data
    expect(req.request.method).toEqual("GET");

});

it('should find a goal by id', done => {

  service.findById(allMocks[0].id)
      .subscribe(goal => {
          expect(goal).toBeTruthy();
          expect(goal.id).toBe(allMocks[0].id);
          done();
      });

  const req = httpClientMock.expectOne(getUrlWithId(allMocks[0].id));

  expect(req.request.method).toEqual("GET");

  req.flush(allMocks[0]);

});

it('should find First Class Goals by userId', done => {
  const userId = "u1";

  service.findFirstClassGoalsByUserId(userId)
      .subscribe(goals => {
          expect(goals).toBeTruthy();
          const userGoals = allMocks.filter( g => g.userId === userId && !g.goalParentId);
          expect(goals.length).toBe(userGoals.length);
          const userGoalIdx = userGoals.findIndex(g => g.id === goals[0].id);
          expect(goals[0].name).toBe(userGoals[userGoalIdx].name);
          done();
      });

  const req = httpClientMock.expectOne(`${getUrl()}/user/${userId}/first-class`);

  expect(req.request.method).toEqual("GET");

  req.flush(allMocks.filter(g => g.userId === userId && !g.goalParentId));

}, 1500);

it('should find a goal by userId', done => {
  const userId = "u1";
  service.findAllByUserId(userId)
      .subscribe(goals => {
          expect(goals).toBeTruthy();
          const userGoals = allMocks.filter( g => g.userId === userId);
          expect(goals.length).toBe(userGoals.length);
          const userGoalIdx = userGoals.findIndex(g => g.id === goals[0].id);
          expect(goals[0].name).toBe(userGoals[userGoalIdx].name);
          done();
      });

  const req = httpClientMock.expectOne(`${getUrl()}/user/${userId}`);

  expect(req.request.method).toEqual("GET");

  req.flush(allMocks.filter(g => g.userId === userId));

});

it('should create the goal data', done => {

  service.create(newGoal)
      .subscribe(response => {
        const goal = response as Goal;
        expect(goal.id).toBeTruthy();
        done();
      });

  const req = httpClientMock.expectOne(getUrl());

  expect(req.request.method).toEqual("POST");

  expect(req.request.body.description)
      .toEqual(newGoal.description);

  req.flush({
      ...newGoal,
      id: "g1235"
  })

});

it('should update the goal data', done => {

  const changes: Partial<Goal> ={ description: "Description Edited" };

  service.update(allMocks[0].id, changes)
      .subscribe(response => {
        const goal = response as Goal;
        expect(goal.id).toBe(allMocks[0].id);
        done()
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

it('should give an error if save goal fails', done => {

  const changes: Partial<Goal> ={ description: "Description Edited" };

  service.update(allMocks[0].id, changes)
  .subscribe({
    next: () => fail("the save goal operation should have failed"),
    error: (error: HttpErrorResponse) => {
      expect(error.status).toBe(500)
      done();
    }
  });

  const req = httpClientMock.expectOne(getUrlWithId(allMocks[0].id));
  expect(req.request.method).toEqual("PUT");
  expect(req.request.body.description)
      .toEqual(changes.description);

      req.flush('Save goal failed', {status:500,
        statusText:'Internal Server Error'});

});

afterEach(() => {
  httpClientMock.verify();
});

});
