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
