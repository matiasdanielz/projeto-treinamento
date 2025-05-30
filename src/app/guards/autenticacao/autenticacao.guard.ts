import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autenticacaoGuard: CanActivateFn = (route, state) => {
  const estaLogado: boolean = true;
  const router = inject(Router)

  if(estaLogado){
    router.navigate(['/Portal']);
    return false
  }else{
    return true;
  }
};
