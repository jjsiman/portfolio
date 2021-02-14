import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageContentResolverService } from './page-content-resolver.service';

describe('PageContentResolverService', () => {
  let service: PageContentResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(PageContentResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
