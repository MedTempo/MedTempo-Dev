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
import { AppModule } from './app.module';

import { IsNotMobileService } from './services/router_guards/isPlataform/is-plataform.service';
import { IsLoggedIn } from './services/router_guards/isLoggedIn/is-logged-in.service';

/*
const routes: Routes = [
  {
    path: ``,
    loadChildren: async function () {
      let { HomeModule } = await import('./pages/hybrid/home/home.module');

      console.log(HomeModule);

      return HomeModule;
    },
  },
  {
    path: `home`,
    redirectTo: ``,
    pathMatch: 'full',
  },
  {
    path: 'calendar',
    loadChildren: async function () {
      let { CalendarModule } = await import('./pages/hybrid/calendar/calendar.module');

      console.log(CalendarModule);

      return CalendarModule;
    },
  },
  {
    path: `**`,
    loadChildren:
    async function () {
      let { NotFoundModule } = await import('./pages/web/not-found/not-found.module');

      console.log(NotFoundModule);

      return NotFoundModule;
    },
    pathMatch: `prefix`
  }
];
*/

const routes: Routes = [
  {
    path: ``,
    loadChildren: async function () {
      let { IndexModule } = await import('./pages/web/index/index.module');

      console.log(IndexModule);

      return IndexModule;
    },
    canActivate: [IsNotMobileService],
  },
  {
    path: `app`,
    loadChildren: async function () {
      let { TabsModule } = await import('./pages/hybrid/tabs/tabs.module');

      console.log(TabsModule);

      return TabsModule;
    },
    canActivate: [
      IsLoggedIn
    ],
    canActivateChild: [
      IsLoggedIn
    ]
  },
  {
    path: 'cadastro',
    loadChildren: async function () {
      let { CadastroModule } = await import(
        './pages/hybrid/cadastro/cadastro.module'
      );

      console.log(CadastroModule);

      return CadastroModule;
    },
    pathMatch: `full`,
  },
  {
    path: 'login',
    loadChildren: async function () {
      let { LoginModule } = await import(
        './pages/hybrid/login/login.module'
      );

      console.log(LoginModule);

      return LoginModule;
    },
    pathMatch: `full`,
  },
  {
    path: `**`,
    loadChildren: async function () {
      let { NotFoundModule } = await import(
        './pages/web/not-found/not-found.module'
      );

      console.log(NotFoundModule);

      return NotFoundModule;
    },
    pathMatch: `prefix`,
  },

  //{ path: 'web', loadChildren: () => import('./pages/web/index/index.module').then(m => m.IndexModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
