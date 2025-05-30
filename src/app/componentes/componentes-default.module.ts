import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoDefaultComponent } from './botao-default/botao-default.component';

@NgModule({
  declarations: [
    BotaoDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BotaoDefaultComponent
  ]
})
export class ComponentesDefaultModule { }
