import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalRoutingModule } from './portal-routing.module';
import { TelaInicioComponent } from '../tela-inicio/tela-inicio.component';
import { BotaoDefaultComponent } from '../../componentes/botao-default/botao-default.component';
import { ComponentesDefaultModule } from '../../componentes/componentes-default.module';



@NgModule({
  declarations: [
    TelaInicioComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    ComponentesDefaultModule
  ]
})
export class PortalModule { }
