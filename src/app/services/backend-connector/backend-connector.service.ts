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

import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario_pessoal } from 'src/interfaces/usuarios';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class BackendConnectorService {
  readonly api_url: string = isDevMode() ? `http://127.0.0.1:7777/` : `https://127.0.0.1:443/api`;

  constructor(private http_client: HttpClient) {}


  public async getData(complemento: string) {
    const data = await this.http_client.request(`GET`, `${this.api_url}${complemento}`, {
      responseType: `json`,
      withCredentials: true,
      observe: "response"
    });

    console.log(data)

    return data;
  }

  public async setData(usr: any, complemento: string) {
    const data = await this.http_client.request(
      `POST`,
      `${this.api_url}${complemento}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },

        body: usr,
        withCredentials: true,
        observe: "response"

      }
    )

      console.log(data)

    return data;
  }

  public async create(usr: usuario_pessoal, complemento: string) {
    const data = await this.http_client.request(
      `POST`,
      `${this.api_url}/${complemento}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },

        body: usr,

      }
    )

      console.log(data)

    return data;
  }


/*
  public async deleteUser(usr: usuario_pessoal){
    const data = await this.http_client.request(
      `DELETE`,
      `${this.api_url}usuarios`,
      {
        headers: {
          'Content-Type': 'application/json',
        },

        body: usr
      }
    )
  }*/
}
