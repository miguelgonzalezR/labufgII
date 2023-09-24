import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-sueldos',
  templateUrl: './sueldos.component.html',
  styleUrls: ['./sueldos.component.css']
})

export class SueldosComponent {

  SueldoI = 0;
  AFP = 0;
  RENTA = 0;
  ISSS = 0;
  SueldoF = 0;

  suedoR = 0;

  

  CalcularAFP(sueldoC: number){
    this.AFP = sueldoC * 0.0725
  }

  CalcularISSS(sueldoC: number){
    this.ISSS = sueldoC * 0.03 
    if(this.ISSS > 30){
      this.ISSS = 30
    } 
  }


  CalcularRenta(sueldoC: number){
    
    if(sueldoC < 472){
      this.RENTA = 0;
    } else if(sueldoC > 472 && sueldoC < 895.25 ){
      this.RENTA = ((this.suedoR - 472.00) * 0.10) + 17.67
    } else if(sueldoC > 895.25 && sueldoC < 2038.10){
      this.RENTA = ((this.suedoR - 895.24) * 0.20) + 60
    } else {
      this.RENTA = ((this.suedoR - 2038.10) * 0.30) + 288.57
    }
  }

  CalcualrSL(){
    this.SueldoF = this.SueldoI - this.RENTA - this.AFP - this.ISSS
  }

  CalcularS(){
    this.CalcularAFP(this.SueldoI);
    this.CalcularISSS(this.SueldoI);
    this.suedoR = this.SueldoI - this.AFP - this.ISSS
    this.CalcularRenta(this.suedoR);
    this.CalcualrSL();
  }




  constructor(){}
  ngOnInit(): void{}
}
