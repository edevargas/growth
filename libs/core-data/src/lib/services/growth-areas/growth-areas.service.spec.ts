import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GrowthArea } from '@flab/api-data';
import { apiMocks } from '@flab/utils';
import { GrowthAreasService } from './growth-areas.service';

describe('GrowthAreasService', () => {
  let service: GrowthAreasService;
  let httpClientMock: HttpTestingController;
  const allMocks = Object.values(apiMocks.GROWTH_AREAS_MOCK);
  const apiUrl = "http://localhost:3333/api";
  const model = "growth-areas";
  const newGrowthArea = {
    name: "New Growth Area",
    description: "New Growth Area",
    icon: ""
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
        GrowthAreasService,
        {provide: "apiUrl", useValue: apiUrl},
      ]
  });
    service = TestBed.inject(GrowthAreasService);
    httpClientMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should retrieve all Growth Areas", done => {
    service.findAll()
        .subscribe( growthAreas => {
            expect(growthAreas).toBeTruthy();
            expect(growthAreas.length).toBe(allMocks.length);
            const firstGrowArea = growthAreas.find(growthArea => growthArea.id === allMocks[0].id )
            expect(firstGrowArea?.name).toBe(allMocks[0].name);
            done();
        })
    const req = httpClientMock.expectOne(getUrl());
    req.flush(allMocks); //Only when flush is called the Http Client will simulate data
    expect(req.request.method).toEqual("GET");

});

it('should find a Growth Area by id', done => {

  service.findById(allMocks[0].id)
      .subscribe(growthArea => {
          expect(growthArea).toBeTruthy();
          expect(growthArea.id).toBe(allMocks[0].id);
          done();
      });

  const req = httpClientMock.expectOne(getUrlWithId(allMocks[0].id));

  expect(req.request.method).toEqual("GET");

  req.flush(allMocks[0]);

});

it('should create the Growth Area data', done => {

  service.create(newGrowthArea)
      .subscribe(response => {
        const growthArea = response as GrowthArea;
        expect(growthArea.id).toBeTruthy();
        done();
      });

  const req = httpClientMock.expectOne(getUrl());

  expect(req.request.method).toEqual("POST");

  expect(req.request.body.description)
      .toEqual(newGrowthArea.description);

  req.flush({
      ...newGrowthArea,
      id: "g1235"
  })

});

it('should update the growthArea item data', done => {

  const changes: Partial<GrowthArea> ={ description: "Description Edited" };

  service.update(allMocks[0].id, changes)
      .subscribe(response => {
        const growthArea = response as GrowthArea;
        expect(growthArea.id).toBe(allMocks[0].id);
        done();
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

it('should give an error if save Growth Area fails', done => {

  const changes: Partial<GrowthArea> ={ description: "Description Edited" };

  service.update(allMocks[0].id, changes)
  .subscribe({
    next: () => fail("the save growthArea operation should have failed"),
    error: (error: HttpErrorResponse) => {
      expect(error.status).toBe(500);
      done();
    }
  });

  const req = httpClientMock.expectOne(getUrlWithId(allMocks[0].id));
  expect(req.request.method).toEqual("PUT");
  expect(req.request.body.description)
      .toEqual(changes.description);

      req.flush('Save Growth Area failed', {status: 500,
        statusText:'Internal Server Error'});

});

afterEach(() => {
  httpClientMock.verify();
});

});
