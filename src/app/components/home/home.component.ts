/* 
    Copyright © 2023 Felipe Chiozzotto Gozzani, Heloísa Real, Juliana Barbosa Sandes, Mateus Felipe da Silveira Vieira, Thiago Babtista da Silva Soares 


    MedTempo-Frontend is free software: you can redistribute it and/or modify 
    it under the terms of the GNU Affero General Public License as published by 
    the Free Software Foundation, either version 3 of the License, or 
    (at your option) any later version. 

    MedTempo-Frontend is distributed in the hope that it will be useful, 
    but WITHOUT ANY WARRANTY; without even the implied warranty of 
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
    GNU Affero General Public License for more details. 

    You should have received a copy of the GNU Affero General Public License 
    along with MedTempo-Frontend.  If not, see <https://www.gnu.org/licenses/>5.
*/ 

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