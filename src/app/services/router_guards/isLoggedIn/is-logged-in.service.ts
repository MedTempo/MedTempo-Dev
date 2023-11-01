import { inject, isDevMode } from "@angular/core"
import { Router } from "@angular/router";

import { getCookie } from "src/app/libs/cookies-lib";

function redirectToLogin(){
  const router = inject(Router)

  router.navigate([`/login`])
}

function redirectToApp(){
  const router = inject(Router)

  router.navigate([`/app`])
}

export function IsLoggedIn(): boolean {
  if (getCookie("is_logged") == "true") {
    return true
  }
  else {
    return false
  }

}


export function CanUseDashboard(){
  IsLoggedIn() == true ? true : redirectToLogin()
}

export function IsAlreadyLoggedIn(){
  IsLoggedIn() == true ? true : redirectToApp
}



/* */

