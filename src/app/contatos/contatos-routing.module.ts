import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos.component';
import { DetalharContatosComponent } from './detalhar-contatos/detalhar-contatos.component';

const routes: Routes = [{
  path: '',
  component: ContatosComponent,
}, {
  path: ':id',
  component: DetalharContatosComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
