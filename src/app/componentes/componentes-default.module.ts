import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoDefaultComponent } from './botao-default/botao-default.component';
import { NavbarDefaultComponent } from './navbar-default/navbar-default.component';
import { PaginaDefaultComponent } from './pagina-default/pagina-default.component';

@NgModule({
  declarations: [
    BotaoDefaultComponent,
    NavbarDefaultComponent,
    PaginaDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BotaoDefaultComponent,
    NavbarDefaultComponent,
    PaginaDefaultComponent
  ]
})
export class ComponentesDefaultModule { }
