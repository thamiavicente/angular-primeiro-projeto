import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt'
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './area-logada/home/home.component';
import { ExtratoComponent } from './area-logada/extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
