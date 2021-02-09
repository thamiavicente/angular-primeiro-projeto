import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt'
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatosComponent } from './contatos/detalhes-contatos/detalhes-contatos.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExtratoComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    ContatosComponent,
    DetalhesContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
