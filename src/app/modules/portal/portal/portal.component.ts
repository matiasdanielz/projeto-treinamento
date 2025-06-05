import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavbarDefaultComponent } from '../../../componentes/navbar-default/navbar-default.component';

@Component({
  selector: 'app-portal',
  standalone: false,
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})
export class PortalComponent implements AfterViewInit{
  @ViewChild('navbar', {static: true}) navbar!: NavbarDefaultComponent;

  navbarItems: any[] = [
    {
      nome: 'Clientes',
      link: 'portal/clientes'
    },
    {
      nome: 'Fornecedores',
      link: 'portal/fornecedores'
    }
  ];

  constructor(){
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }
}
