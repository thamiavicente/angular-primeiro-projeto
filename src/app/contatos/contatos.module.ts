import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { DetalhesContatosComponent } from './detalhes-contatos/detalhes-contatos.component';


@NgModule({
  declarations: [
    ContatosComponent,
    DetalhesContatosComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule
  ]
})
export class ContatosModule { }
