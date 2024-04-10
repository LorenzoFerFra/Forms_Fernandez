import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  aprobado = true; 
  mostrarListado = false;
  students = [{ nombre: 'Mario', aprobado: true },{ nombre: 'Kirby', aprobado: true },{ nombre: 'Dk', aprobado: true },{ nombre: 'Pikachu', aprobado: true }];
  cambioAprobar(){
    this.aprobado = !this.aprobado;
  }
  mostrarNombre(){
    this.aprobado = !this.aprobado;
  }
  cambioAprobar2(){
    this.aprobado = !this.aprobado;
  }
}
