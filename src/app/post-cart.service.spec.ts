import { TestBed } from '@angular/core/testing';

import { PostCartService } from './post-cart.service';

describe('PostCartService', () => {
  let service: PostCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
