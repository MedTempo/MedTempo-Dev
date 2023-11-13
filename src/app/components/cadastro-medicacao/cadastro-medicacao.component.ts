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
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';


@Component({
  selector: 'app-cadastro-medicacao',
  templateUrl: './cadastro-medicacao.component.html',
  styleUrls: ['./cadastro-medicacao.component.scss', "../../pages/hybrid/login/login.component.scss"]
})
export class CadastroMedicacaoComponent {
  constructor(private back: BackendConnectorService, private router: Router){

  }

  usr:any

  public async CadastrarMedicamento($event: NgForm){
    console.log($event.value)

    this.usr = $event.value

    console.log(this.usr)

    console.log(`is valid ${$event.valid}`)


    if($event.valid){
      let req = await this.back.setData(this.usr, `medicine`)


      await req.subscribe((res: any)=>{
        console.log(res)
      })
  
      console.log(req)
    }
    else{
      alert(`formulario não é valido`)
    }

  }

}
