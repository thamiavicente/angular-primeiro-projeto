import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalharContatosComponent } from './detalhar-contatos/detalhar-contatos.component';
import { FormularioContatoComponent } from './formulario-contato/formulario-contato.component';

const routes: Routes = [{
  path: '',
  component: ListarContatosComponent,
},{
  path: 'novo',
  component: FormularioContatoComponent,
},{
  path: ':id',
  component: DetalharContatosComponent,
},{
  path: ':id/editar',
  component: FormularioContatoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
