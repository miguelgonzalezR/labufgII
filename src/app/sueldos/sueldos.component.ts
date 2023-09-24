import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-sueldos',
  templateUrl: './sueldos.component.html',
  styleUrls: ['./sueldos.component.css']
})

export class SueldosComponent {

  valorInput = '';

  CalcularS(){
    console.log("hola mundo")
    alert("hola mundo")
    const valor = this.valorInput;
    console.log('Valor del input:', valor);
  }


  constructor(){}
  ngOnInit(): void{}
}
