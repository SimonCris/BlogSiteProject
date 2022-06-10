import { TestBed } from '@angular/core/testing';

import { WorkflowRoutingService } from './workflow-routing.service';

describe('WorkflowRoutingService', () => {
  let service: WorkflowRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
