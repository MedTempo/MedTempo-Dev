import { Component } from '@angular/core';

import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import type { usuario_pessoal } from 'src/interfaces/usuarios';
import type usr_type from 'src/interfaces/usr_type';

@Component({
  selector: 'app-cadastro-e',
  templateUrl: './cadastro-e.component.html',
  styleUrls: ['../../pages/hybrid/cadastro/cadastro.component.scss']
})
export class CadastroEComponent {

  usr!: usuario_pessoal

  usuarios?: Array<usuario_pessoal>

  usr_type: usr_type = 2

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
