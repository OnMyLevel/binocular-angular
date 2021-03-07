import { TestBed } from '@angular/core/testing';

import { RemoteDnsService } from './remote-dns.service';

describe('RemoteDnsService', () => {
  let service: RemoteDnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteDnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
