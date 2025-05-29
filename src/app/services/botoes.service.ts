import { Injectable } from '@angular/core';
import { Botao } from '../models/botao';

@Injectable({
  providedIn: 'root'
})
export class BotoesService {

  constructor() { }

  public getBotoes(): Botao[]{
    return [
      {
        nome: "botao 1"
      },
    ];
  }
}
