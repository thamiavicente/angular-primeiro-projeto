import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtratoRoutingModule } from './extrato-routing.module';
import { ExtratoComponent } from './extrato.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ExtratoComponent,
  ],
  imports: [
    CommonModule,
    ExtratoRoutingModule,
    FontAwesomeModule,
  ]
})
export class ExtratoModule { }
