import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroPRoutingModule } from './cadastro-p-routing.module';
import { CadastroPComponent } from './cadastro-p.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    CadastroPComponent
  ],
  imports: [
    CommonModule,
    CadastroPRoutingModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    CadastroPComponent
  ]
})
export class CadastroPModule { }
