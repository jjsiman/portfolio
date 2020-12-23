import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';

describe('EmailService', () => {
  let service: EmailService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EmailService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post emails to the api', () => {
    service.postEmail({ }).subscribe();
    const req = controller.expectOne(service.api);
    expect(req.request.method).toEqual('POST');
  })
});
