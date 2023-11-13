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
import { getCookie }from 'src/app/libs/cookies-lib';
import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';

@Component({
  selector: 'mdt-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor(private back: BackendConnectorService){

  }

  usr_type: number = parseInt(getCookie("usr_type"))

  async ngOnInit(){
   let data = await this.back.getData("medicine")

   await data.subscribe((res)=>{


    document.cookie = `medicine = ${JSON.stringify(res.body)}; max-age = 3600; SameSite=Lax; Secure`

    console.log(res)
   })
  }
}
