import { TestBed } from '@angular/core/testing';

import { CheckoutFormBuilderService } from './checkout-form-builder.service';

describe('CheckoutFormBuilderService', () => {
  let service: CheckoutFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
