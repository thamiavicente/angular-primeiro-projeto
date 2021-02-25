import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';

const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
},{
  path: 'home',
  loadChildren: () => import ('./home/home.module').then(m => m.HomeModule),
  canActivate: [EstaLogadoGuard],
}, {
  path: 'login',
  component: LoginComponent,
  canActivate: [NaoEstaLogadoGuard],
}, {
  path: 'extrato',
  component: ExtratoComponent,
  canActivate: [EstaLogadoGuard],

}, {
  path: 'contatos',
  loadChildren: () => import ('./contatos/contatos.module').then(m => m.ContatosModule),
  canActivate: [EstaLogadoGuard],
}, {
  path: '**',
  loadChildren: () => import ('./pagina-nao-encontrada/pagina-nao-encontrada.module').then(m => m.PaginaNaoEncontradaModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
