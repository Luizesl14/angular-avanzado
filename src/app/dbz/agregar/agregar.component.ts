import { Component, Input } from '@angular/core';
import { Personagem } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input()
  personagens: Personagem[] =[];

  @Input()
  novo: Personagem ={
    nombre: '',
    poder: 0
  };

  agregar(){
    if(this.novo.nombre.trim().length === 0){
      return;
    }

   this.personagens.push(this.novo);

   this.novo ={
    nombre: '',
    poder: 0
  }
  }


}
