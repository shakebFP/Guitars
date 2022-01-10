import { TestBed } from '@angular/core/testing';

import { GuitarListTransferService } from './guitar-list-transfer.service';

describe('GuitarListTransferService', () => {
  let service: GuitarListTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarListTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
