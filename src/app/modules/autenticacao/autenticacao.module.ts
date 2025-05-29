import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { TelaLoginComponent } from '../tela-login/tela-login.component';
import { BotaoDefaultComponent } from '../../componentes/botao-default/botao-default.component';


@NgModule({
  declarations: [
    TelaLoginComponent,
    BotaoDefaultComponent
  ],
  imports: [
    CommonModule,
    AutenticacaoRoutingModule
  ]
})
export class AutenticacaoModule { }
