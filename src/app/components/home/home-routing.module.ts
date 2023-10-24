import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { IsLoggedIn } from 'src/app/services/router_guards/isLoggedIn/is-logged-in.service';

const routes: Routes = [{ path: '', component: HomeComponent, canActivate: [
  IsLoggedIn
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
