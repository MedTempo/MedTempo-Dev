import { Component, OnInit } from '@angular/core';
import { getCookie }from 'src/app/libs/cookies-lib';
import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';

@Component({
  selector: 'mdt-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor(private back: BackendConnectorService){

  }

  usr_type: number = parseInt(getCookie("usr_type"))

  async ngOnInit(){
   let data = await this.back.getData("medicine")

   await data.subscribe((res)=>{


    document.cookie = `medicine = ${JSON.stringify(res.body)}; max-age = 3600; SameSite=Lax; Secure`

    console.log(res)
   })
  }
}
