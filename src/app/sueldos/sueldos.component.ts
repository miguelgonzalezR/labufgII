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
  AFP = '';
  RENTA = '';
  ISSS = '';

  CalcularS(){  
    const sueldo = this.SueldoI;
    const AFPts = this.AFP;
    const Rentas = this.RENTA;
    const ISSES = this.ISSS;

    console.log(typeof sueldo);
    console.log(AFPts)
    console.log(Rentas)
    console.log(ISSES)
  }


  constructor(){}
  ngOnInit(): void{}
}
