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
