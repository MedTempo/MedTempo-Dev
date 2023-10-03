import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroFRoutingModule } from './cadastro-f-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CadastroFComponent } from './cadastro-f.component';


@NgModule({
  declarations: [
    CadastroFComponent
  ],
  imports: [
    CommonModule,
    CadastroFRoutingModule,
    IonicModule,
    FormsModule
  ], 
  exports: [
    CadastroFComponent
  ]
})
export class CadastroFModule { }
