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
import { isPlatform } from "@ionic/angular";

import { Router } from "@angular/router";


function redirectToApp(){
  const router = inject(Router)

  router.navigate([`/app`])
}


export function IsNotMobileService(): boolean{

  if(isDevMode() === true){
    redirectToApp()
    return false
  }

  if (isPlatform(`mobile`) == false) {
    return true
  } else {
    redirectToApp()
    return false
  }
}

/*
export function IsMobileService(): boolean{
  if ( isPlatform(`mobile`)  || isDevMode() == true) {
    return true
  } else {
    return false
  }
}
*/

