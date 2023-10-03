import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroEModule } from '../../../components/cadastro-e/cadastro-e.module';
import { CadastroFModule } from '../../../components/cadastro-f/cadastro-f.module';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    NgFor,
    NgIf,
    FormsModule,
    IonicModule,
    CadastroEModule,
    CadastroFModule
  ]
})
export class CadastroModule { }
