/* 
    Copyright © 2023 Felipe Chiozzotto Gozzani, Heloísa Real, Juliana Barbosa Sandes, Mateus Felipe da Silveira Vieira, Thiago Babtista da Silva Soares 


    MedTempo-Frontend is free software: you can redistribute it and/or modify 
    it under the terms of the GNU Affero General Public License as published by 
    the Free Software Foundation, either version 3 of the License, or 
    (at your option) any later version. 

    MedTempo-Frontend is distributed in the hope that it will be useful, 
    but WITHOUT ANY WARRANTY; without even the implied warranty of 
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
    GNU Affero General Public License for more details. 

    You should have received a copy of the GNU Affero General Public License 
    along with MedTempo-Frontend.  If not, see <https://www.gnu.org/licenses/>5.
*/ 

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
  ],/*
  exports: [
    CadastroMedicacaoComponent
  ]*/
})
export class CadastroMedicacaoModule { }
