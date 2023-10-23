import { Component } from '@angular/core';
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

  constructor(){
    console.log("cookie begin")
    console.log(document.cookie)
  }

  arr_medicamentos: Array<medicamentos> = [
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


  ].sort(function(a,b){

    console.log(`A${a.horario} B${b.horario}`)

    return a.horario.getTime() - b.horario.getTime();
  })
}

