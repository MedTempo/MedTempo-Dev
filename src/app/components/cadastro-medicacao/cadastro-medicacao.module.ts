import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroMedicacaoRoutingModule } from './cadastro-medicacao-routing.module';
import { CadastroMedicacaoComponent } from './cadastro-medicacao.component';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
    CadastroMedicacaoComponent
  ],
  imports: [
    CommonModule,
    CadastroMedicacaoRoutingModule,
    NavbarModule 
  ]
})
export class CadastroMedicacaoModule { }
