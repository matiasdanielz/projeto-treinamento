import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { portalGuard } from './guards/portal/portal.guard';
import { autenticacaoGuard } from './guards/autenticacao/autenticacao.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Portal',
    pathMatch: 'prefix'
  },
  {
    path: 'Portal',
    loadChildren: () => import('./modules/portal/portal.module').then(m => m.PortalModule),
    pathMatch: 'prefix',
    canActivate: [
      portalGuard
    ]
  },
  {
    path: 'Autenticacao',
    loadChildren: () => import('./modules/autenticacao/autenticacao.module').then(m => m.AutenticacaoModule),
    pathMatch: 'prefix',
    canActivate: [
      autenticacaoGuard
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
