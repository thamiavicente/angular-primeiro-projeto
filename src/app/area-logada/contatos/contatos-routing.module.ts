import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalharContatosComponent } from './detalhar-contatos/detalhar-contatos.component';

const routes: Routes = [{
  path: '',
  component: ListarContatosComponent,
}, {
  path: ':id',
  component: DetalharContatosComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
