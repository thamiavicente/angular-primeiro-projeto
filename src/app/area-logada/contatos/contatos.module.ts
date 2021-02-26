import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalharContatosComponent } from './detalhar-contatos/detalhar-contatos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ListarContatosComponent,
    DetalharContatosComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    FontAwesomeModule,
  ]
})
export class ContatosModule { }
