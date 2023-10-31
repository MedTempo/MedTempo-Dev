import { Component } from '@angular/core';
import { deleteAllCookies } from 'src/app/libs/cookies-lib';

@Component({
  selector: 'mdt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public exit(){
    deleteAllCookies()
  }
}
