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
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { TabsModule } from 'src/app/pages/hybrid/tabs/tabs.module';
import { NavbarModule } from '../navbar/navbar.module';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ClockComponent } from '../clock/clock.component';
import { ClockModule } from '../clock/clock.module';
//import { CadastroMedicacaoModule } from '../cadastro-medicacao/cadastro-medicacao.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TabsModule,
    NavbarModule,
    IonicModule,
    RouterLink,
    RouterLinkActive,
    NgFor,
    NgIf,
    ClockModule,

    //CadastroMedicacaoModule,
  ]
})
export class HomeModule { }
