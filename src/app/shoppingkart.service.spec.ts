import { TestBed, inject } from '@angular/core/testing';

import { ShoppingkartService } from './shoppingkart.service';

describe('ShoppingkartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingkartService]
    });
  });

  it('should be created', inject([ShoppingkartService], (service: ShoppingkartService) => {
    expect(service).toBeTruthy();
  }));
});
