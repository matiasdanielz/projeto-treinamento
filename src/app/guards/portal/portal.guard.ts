import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const portalGuard: CanActivateFn = (route, state) => {
  const estaLogado: boolean = true;
  const router = inject(Router)

  if(estaLogado){
    return true
  }else{
    router.navigate(['/Autenticacao']);
    return false;
  }
};
