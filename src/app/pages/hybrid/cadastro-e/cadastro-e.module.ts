import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroERoutingModule } from './cadastro-e-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CadastroEComponent } from './cadastro-e.component';


@NgModule({
  declarations: [
    CadastroEComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    CadastroERoutingModule,
    FormsModule
  ],
  exports: [
    CadastroEComponent
  ]
})
export class CadastroEModule { }
