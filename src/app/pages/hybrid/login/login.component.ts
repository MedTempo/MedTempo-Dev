import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  selectTabs = 'recent'; //valor para a divisão do ion-segment

  usr

  constructor(private back: BackendConnectorService, private router: Router){
    this.usr = {
      "id": "",
      "data_criacao": Date(),
      "data_nascimento": Date(),
      "descricao": "",
      "email": "",
      "senha": "",
      "idade": 0,
      "nome": "",
      "sexo": null,
      "sobrenome": ""
  }
  }

  public async Login($event: NgForm,){
    console.log($event.value)

    this.usr = $event.value

    console.log(this.usr)

    console.log(`is valid ${$event.valid}`)


    if($event.valid){
      let req = await this.back.setData(this.usr, `login`)


      await req.subscribe((res: any)=>{

        let log_out = new Date(new Date().getTime() + (60 * 1000)).toUTCString();

        console.log(log_out)

        if (res.status === 200) {
          document.cookie = `is_logged = true; max-age = 3600; SameSite=Lax; Secure`
        }

        console.log(res.headers.keys())
        console.log(`Cookie is:${res.headers.get("Set-Cookie")}`)
        console.log(res)
      })
  
      console.log(req)


      this.router.navigate([`/app`])
    }
    else{
      alert(`formulario não é valido`)
    }

  }
}
