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
import { Subscription } from 'rxjs';

import { OnInit } from '@angular/core';

import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';
import { req_user_pessoal, usuario_pessoal } from 'src/interfaces/usuarios';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  data?: any
  value?: Array<usuario_pessoal>

  constructor(public back: BackendConnectorService){

  }


  async ngOnInit() {
    this.data = await this.back.getData(`user-pessoal`)
    
    await this.data.subscribe((res: req_user_pessoal)=>{
      this.value = res.data.usuario_pessoal.values
      console.log(`bg`)

      console.log(this.value)
  
      console.log(`end`)
    })
  }

  async connect(){

  
    console.log(this.value)


   // console.log(this.data)


  }
}
