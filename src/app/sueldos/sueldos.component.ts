import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-sueldos',
  templateUrl: './sueldos.component.html',
  styleUrls: ['./sueldos.component.css']
})

export class SueldosComponent {

  SueldoI = '';

  CalcularS(){
    const sueldo = this.SueldoI;
    console.log(typeof sueldo);
  }


  constructor(){}
  ngOnInit(): void{}
}
