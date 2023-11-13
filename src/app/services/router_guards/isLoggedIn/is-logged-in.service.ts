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

import { inject, isDevMode } from "@angular/core"
import { Router } from "@angular/router";

import { getCookie } from "src/app/libs/cookies-lib";

function redirectToLogin(){
  const router = inject(Router)

  router.navigate([`/login`])
}


export function IsLoggedIn(): boolean{

  if(isDevMode() === true){
    return true
  }

  let cookie_value = getCookie("is_logged")

  console.log(`ck value ${cookie_value}`)

  if (cookie_value == "true") {
    return true
  }
  else {
    console.log("teste...")
    redirectToLogin()
    return false
  }
  

}



/* */

