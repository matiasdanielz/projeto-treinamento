import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicioComponent } from './modules/tela-inicio/tela-inicio.component';
import { TelaLoginComponent } from './modules/tela-login/tela-login.component';
import { PortalModule } from './modules/portal/portal.module';

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
