import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-default',
  standalone: false,
  templateUrl: './botao-default.component.html',
  styleUrl: './botao-default.component.css'
})
export class BotaoDefaultComponent {
  @Input() textoBotao: string = "Click Me";
  @Output() quandoClicado: EventEmitter<any> = new EventEmitter();

  public avisarQueFoiClicado(){
    this.quandoClicado.emit();
  }
}
