import { Component, Input} from '@angular/core';
import { Personagem } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personages: Personagem[] =[
    {
      nombre: 'Goku',
      poder: 15000
    },

    {
      nombre: 'Vegeta',
      poder: 8500
    },

    {
      nombre: 'Kuririn',
      poder: 799
    },
  ]

  @Input()
  novo: Personagem ={
    nombre: '',
    poder: 0
  };
}
