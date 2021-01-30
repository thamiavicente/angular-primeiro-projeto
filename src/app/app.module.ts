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

registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MemesLinguagensComponent,
    FolhetoMercadoComponent
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
