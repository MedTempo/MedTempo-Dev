import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';


import { HttpClientModule } from '@angular/common/http';
import { CadastroFComponent } from './pages/hybrid/cadastro-f/cadastro-f.component';
import { CadastroEComponent } from './pages/hybrid/cadastro-e/cadastro-e.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      IonicModule.forRoot(),
      HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
