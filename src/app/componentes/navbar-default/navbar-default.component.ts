import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-default',
  standalone: false,
  templateUrl: './navbar-default.component.html',
  styleUrl: './navbar-default.component.css'
})
export class NavbarDefaultComponent {
  @Input() navbarItems: any[] = [];

  public mostraTexto1(){
    alert("Mostra Texto 1");
  }

  protected mostraTexto2(){
    alert("Mostra Texto 2");
  }
}
