import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt'
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { MemesLinguagensComponent } from './shared/components/memes-linguagens/memes-linguagens.component';
import { FolhetoMercadoComponent } from './shared/components/folheto-mercado/folheto-mercado.component';
import { LoginComponent } from './login/login.component';
import { ContadorComponent } from './shared/components/contador/contador.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MemesLinguagensComponent,
    FolhetoMercadoComponent,
    LoginComponent,
    ContadorComponent,
    ExtratoComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
