import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Portal',
    loadChildren: () => import('./modules/portal/portal.module').then(m => m.PortalModule),
    pathMatch: 'full'
  },
  {
    path: 'Autenticacao',
    loadChildren: () => import('./modules/autenticacao/autenticacao.module').then(m => m.AutenticacaoModule),
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
