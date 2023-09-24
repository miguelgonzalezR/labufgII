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
    const AFPts = parseFloat(this.AFP); // Convierte a número de punto flotante
    const ISSES = parseFloat(this.ISSS); // Convierte a número de punto flotante
  // Multiplicar el valor de AFP por 7.25%
  const AFPMultiplicada = AFPts * 0.0725;
   // Multiplicar el valor de ISSES por 3%
   const ISSESMultiplicada = ISSES * 0.03;

  console.log("Sueldo Inicial:", sueldo);
  console.log("Deducciones AFP (después de multiplicar por 7.25%):", AFPMultiplicada);
  console.log("Deducciones ISSS (después de multiplicar por 3%):", ISSESMultiplicada);

  }




  constructor(){}
  ngOnInit(): void{}
}
