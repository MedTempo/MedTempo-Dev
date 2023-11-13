import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';


@Component({
  selector: 'app-cadastro-medicacao',
  templateUrl: './cadastro-medicacao.component.html',
  styleUrls: ['./cadastro-medicacao.component.scss', "../../pages/hybrid/login/login.component.scss"]
})
export class CadastroMedicacaoComponent {
  constructor(private back: BackendConnectorService, private router: Router){

  }

  usr:any

  public async CadastrarMedicamento($event: NgForm){
    console.log($event.value)

    this.usr = $event.value

    console.log(this.usr)

    console.log(`is valid ${$event.valid}`)


    if($event.valid){
      let req = await this.back.setData(this.usr, `medicine`)


      await req.subscribe((res: any)=>{
        console.log(res)
      })
  
      console.log(req)
    }
    else{
      alert(`formulario não é valido`)
    }

  }

}
