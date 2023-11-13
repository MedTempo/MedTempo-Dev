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
import { usuario_pessoal } from 'src/interfaces/usuarios';
import usr_type from 'src/interfaces/usr_type';

import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-p',
  templateUrl: './cadastro-p.component.html',
  styleUrls: ['../../pages/hybrid/cadastro/cadastro.component.scss']
})
export class CadastroPComponent {

  usr!: usuario_pessoal

  usuarios?: Array<usuario_pessoal>

  usr_type: usr_type = 1

  constructor(private back: BackendConnectorService, private router: Router){

  }

  public async Create($event: NgForm, url: string){
    console.log(this.usuarios)
    console.log(`O evento é${JSON.stringify($event.value)}`)

    this.usr = $event.value

    console.log(this.usr)

    console.log(`is valid ${$event.valid}`)


    if($event.valid){
      let req = await this.back.create(this.usr, url)


      await req.subscribe((res: any)=>{
        console.log(res)
      })
  
      console.log(req)
      this.router.navigate([`/login`])
    }
    else{
      alert(`formulario não é valido`)
    }

  }
}
