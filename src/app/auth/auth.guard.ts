import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  let authenticated = authService.isAuthenticated();

  if(authenticated){
    return true;
  } else {
    router.navigate(['login'])
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    return false;
  }
};
