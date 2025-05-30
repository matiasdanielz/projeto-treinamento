import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  standalone: false,
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {

  constructor(
    private router: Router
  ){

  }

  public moverParaInicio(){
    this.router.navigate(['/Portal']);
  }
}
