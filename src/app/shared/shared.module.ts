import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MemesLinguagensComponent } from './components/memes-linguagens/memes-linguagens.component';
import { FolhetoMercadoComponent } from './components/folheto-mercado/folheto-mercado.component';
import { ContadorComponent } from './components/contador/contador.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MemesLinguagensComponent,
    FolhetoMercadoComponent,
    ContadorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MemesLinguagensComponent,
    FolhetoMercadoComponent,
    ContadorComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }]
})
export class SharedModule { }
