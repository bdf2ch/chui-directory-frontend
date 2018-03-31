import { TestBed, inject } from '@angular/core/testing';

import { IndustriesResource } from './industries-resource.service';

describe('IndustriesResource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndustriesResource]
    });
  });

  it('should be created', inject([IndustriesResource], (service: IndustriesResource) => {
    expect(service).toBeTruthy();
  }));
});
