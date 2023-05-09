import { TestBed } from '@angular/core/testing';

import { AuthJWTTokenInterceptor } from './auth-jwttoken.interceptor';

describe('AuthJWTTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthJWTTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthJWTTokenInterceptor = TestBed.inject(AuthJWTTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
