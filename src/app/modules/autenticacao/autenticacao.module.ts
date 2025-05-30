import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { BotaoDefaultComponent } from '../../componentes/botao-default/botao-default.component';
import { ComponentesDefaultModule } from '../../componentes/componentes-default.module';


@NgModule({
  declarations: [
    TelaLoginComponent,
  ],
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    ComponentesDefaultModule
  ]
})
export class AutenticacaoModule { }
