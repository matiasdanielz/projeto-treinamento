import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { PortalComponent } from './portal/portal.component';
import { TelaClientesComponent } from './tela-clientes/tela-clientes.component';
import { TelaFornecedoresComponent } from './tela-fornecedores/tela-fornecedores.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'inicio',
        component: TelaInicioComponent
      },
      {
        path: 'clientes',
        component: TelaClientesComponent
      },
      {
        path: 'fornecedores',
        component: TelaFornecedoresComponent
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortalRoutingModule { }
