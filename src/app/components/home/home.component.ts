import { Component } from '@angular/core';
import { getCookie } from 'src/app/libs/cookies-lib';
import type medicamentos from 'src/interfaces/medicamentos';

let now: Date = new Date()

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  tommorow: Date = new Date(now.setDate(now.getDate() + 1))

  fivemin: Date = new Date(new Date().setMinutes(now.getMinutes() + 1))

  arr_medicamentos: Array<medicamentos | undefined> = [] // JSON.parse(getCookie("medicine")).values

  constructor(){
    console.log("cookie begin")
    console.log(document.cookie)

    console.log(this.arr_medicamentos)
  
    /*this.arr_medicamentos.sort(function(a,b){

      console.log(`A${a.horario} B${b.horario}`)
  
      return a.horario.getTime() - b.horario.getTime();
    })*/
  }
  }



/*

  [
    {
      nome: `LOSARTRANA`,
      horario: this.tommorow,
      dosagem: `1 Comprimido`
    },    
    {
      nome: `ASPIRINA`,
      horario: this.fivemin,
      dosagem: `1 Comprimido`
    },


  ]
*/