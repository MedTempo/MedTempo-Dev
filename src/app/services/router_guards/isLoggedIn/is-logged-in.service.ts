import { inject, isDevMode } from "@angular/core"
import { Router } from "@angular/router";


function redirectToLogin(){
  const router = inject(Router)

  router.navigate([`/login`])
}


export function IsLoggedIn(): boolean{
/*
  if(isDevMode() === true){
    return true
  }
*/
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

function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }