import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { SelectorRoutingModule } from './selector-routing.module';
import { SelectorComponent } from './selector.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectorComponent
  ],
  imports: [
    CommonModule,
    SelectorRoutingModule,
    IonicModule,
    NgFor,
    NgIf,
    FormsModule
  ],
  exports: [
    SelectorComponent
  ]
})
export class SelectorModule { }
