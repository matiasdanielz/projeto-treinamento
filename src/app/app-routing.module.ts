import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicioComponent } from './modules/tela-inicio/tela-inicio.component';
import { TelaLoginComponent } from './modules/tela-login/tela-login.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: TelaInicioComponent
  },
  {
    path: 'autenticacao',
    component: TelaLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
