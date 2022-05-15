import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})

export class ContadorComponent {
  title = 'Contador App';
  numero: number = 10;

  acumular( valor: number): number{
    return this.numero += valor;
  }
}
