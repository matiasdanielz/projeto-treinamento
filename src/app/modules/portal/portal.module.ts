import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalRoutingModule } from './portal-routing.module';
import { TelaInicioComponent } from '../tela-inicio/tela-inicio.component';
import { BotaoDefaultComponent } from '../../componentes/botao-default/botao-default.component';



@NgModule({
  declarations: [
    TelaInicioComponent,
    BotaoDefaultComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
