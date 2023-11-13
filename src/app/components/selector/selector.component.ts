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

import { Component, OnInit } from '@angular/core';
import { req_user_pessoal, usuario_pessoal } from 'src/interfaces/usuarios';
import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';
import { NgForm } from '@angular/forms';


import { Router } from '@angular/router';
import usr_type from 'src/interfaces/usr_type';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  usr: usuario_pessoal

  usuarios?: Array<usuario_pessoal>

  usr_type: usr_type = 1

  constructor(private back: BackendConnectorService, private router: Router){
    this.usr = {
      "id": "",
      "data_criacao": Date(),
      "data_nascimento": Date(),
      "descricao": "",
      "email": "",
      "senha": "",
      "nome": "",
      "sexo": null,
      "sobrenome": ""
  }


  }

  public async ngOnInit() {
    let req = await this.back.getData(`user-pessoal`)

    await req.subscribe((res: any) => {
      this.usuarios = res.data.usuario_pessoal.values
    })
 
  }


  public async Create($event: NgForm, url: string){
    console.log(this.usuarios)
    console.log($event.value)

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


  public async Delete(user: string){
    
  }
}
