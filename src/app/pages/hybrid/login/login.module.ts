import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

//Importar o selector para integrar login e cadastro
import { SelectorModule } from '../../../components/selector/selector.module'



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IonicModule,
    FormsModule,
    SelectorModule,
    
  ]
})
export class LoginModule { }
