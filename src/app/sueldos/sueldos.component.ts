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

  CalcularS(){
    const sueldo = this.SueldoI;
    const AFPts = this.AFP
    console.log(typeof sueldo);
    console.log(AFPts)
  }


  constructor(){}
  ngOnInit(): void{}
}
