import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalharContatosComponent } from './detalhar-contatos/detalhar-contatos.component';


@NgModule({
  declarations: [
    ListarContatosComponent,
    DetalharContatosComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule
  ]
})
export class ContatosModule { }
