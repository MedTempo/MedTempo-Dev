import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroMedicacaoRoutingModule } from './cadastro-medicacao-routing.module';
import { CadastroMedicacaoComponent } from './cadastro-medicacao.component';
import { NavbarModule } from '../navbar/navbar.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroMedicacaoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CadastroMedicacaoRoutingModule,
    NavbarModule,
    FormsModule
  ],
  exports: [
    CadastroMedicacaoComponent
  ]
})
export class CadastroMedicacaoModule { }
