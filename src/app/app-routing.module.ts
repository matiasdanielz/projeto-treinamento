import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { portalGuard } from './guards/portal/portal.guard';
import { autenticacaoGuard } from './guards/autenticacao/autenticacao.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portal',
    pathMatch: 'prefix'
  },
  {
    path: 'portal',
    loadChildren: () => import('./modules/portal/portal.module').then(m => m.PortalModule),
    pathMatch: 'prefix'
  },
  {
    path: 'autenticacao',
    loadChildren: () => import('./modules/autenticacao/autenticacao.module').then(m => m.AutenticacaoModule),
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
