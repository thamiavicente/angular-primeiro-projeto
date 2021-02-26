import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalharContatosComponent } from './detalhar-contatos/detalhar-contatos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarContatosComponent,
    DetalharContatosComponent,
    NovoContatoComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class ContatosModule { }
