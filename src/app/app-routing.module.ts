import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { DetalhesContatosComponent } from './contatos/detalhes-contatos/detalhes-contatos.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
}, {
  path: 'login',
  component: LoginComponent,
}, {
  path: 'extrato',
  component: ExtratoComponent,
}, {
  path: 'contatos',
  component: ContatosComponent,
}, {
  path: 'contatos/:id',
  component: DetalhesContatosComponent,
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: '**',
  component: PaginaNaoEncontradaComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
