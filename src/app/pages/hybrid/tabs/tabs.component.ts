import { Component, OnInit } from '@angular/core';
import BackendConnectorService from 'src/app/services/backend-connector/backend-connector.service';

@Component({
  selector: 'mdt-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor(private back: BackendConnectorService){

  }

  async ngOnInit(){
   let data = await this.back.getData("medicine")

   await data.subscribe((res)=>{
    console.log(res)
   })
  }
}
