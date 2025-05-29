import { Component } from '@angular/core';
import { Botao } from '../../models/botao';
import { BotoesService } from '../../services/botoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicio',
  standalone: false,
  templateUrl: './tela-inicio.component.html',
  styleUrl: './tela-inicio.component.css'
})
export class TelaInicioComponent {
  public botoes: Botao[] = [];

  constructor(
    private botoesService: BotoesService,
    private router: Router
  ){
    this.botoes = botoesService.getBotoes();
  }

  public apresentarTexto(){
    this.router.navigate(['/autenticacao']);
  }
}
