import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalRoutingModule } from './portal-routing.module';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { BotaoDefaultComponent } from '../../componentes/botao-default/botao-default.component';
import { ComponentesDefaultModule } from '../../componentes/componentes-default.module';
import { TelaClientesComponent } from './tela-clientes/tela-clientes.component';
import { TelaFornecedoresComponent } from './tela-fornecedores/tela-fornecedores.component';
import { PortalComponent } from './portal/portal.component';



@NgModule({
  declarations: [
    TelaInicioComponent,
    TelaClientesComponent,
    TelaFornecedoresComponent,
    PortalComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    ComponentesDefaultModule
  ]
})
export class PortalModule { }
