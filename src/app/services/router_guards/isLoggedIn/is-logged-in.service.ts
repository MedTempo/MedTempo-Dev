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

