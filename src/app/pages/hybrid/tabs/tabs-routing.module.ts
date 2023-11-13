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
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { IsLoggedIn } from 'src/app/services/router_guards/isLoggedIn/is-logged-in.service';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    canActivateChild: [
      IsLoggedIn
    ],
    children: [
      {
        path: ``,
        redirectTo: `home`,
        pathMatch: 'full',

      },
      {
        path: `home`,
        loadChildren: async function () {
          let { HomeModule } = await import(
            '../../../components/home/home.module'
          );

          console.log(HomeModule);

          return HomeModule;
        },
        canActivate: [
          IsLoggedIn
        ]
      },
      {
        path: `calendar`,
        loadChildren: async function () {
          let { CalendarModule } = await import(
            '../../../components/calendar/calendar.module'
          );

          console.log(CalendarModule);

          return CalendarModule;
        },
      },
      {
        path: `chat`,
        loadChildren: async function () {
          let { ChatModule } = await import(
            '../../../components/chat/chat.module'
          );

          console.log(ChatModule);

          return ChatModule;
        },
        
      },
      {
        path: `perfil`,
        loadChildren: async function () {
          let { PerfilModule } = await import(
            '../../../components/perfil/perfil.module'
          );

          console.log(PerfilModule);

          return PerfilModule;
        },
        
      },
      {
        path: 'cadastro-medicacao',
        loadChildren: async function () {
          let { CadastroMedicacaoModule } = await import(
            '../../../components/cadastro-medicacao/cadastro-medicacao.module'
          );
    
          console.log(CadastroMedicacaoModule);
    
          return CadastroMedicacaoModule;
        },
        pathMatch: `full`,
      },
      

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
