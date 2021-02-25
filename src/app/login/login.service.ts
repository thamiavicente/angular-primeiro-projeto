import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contato } from '../area-logada/contatos/contatos.interfaces';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: '..... Token de Autenticação .....'
    })
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  logar(email: string, password: string): Observable<LoginResponse> {
    // return this.http.post(this.API_URL + '/auth', contato, this.httpOptions);

    if (email === 'pessoa@email.com' && password === '12345'){
      return of({ //Usar @linkschedule ??
        usuario: {
          nome: 'Pessoa',
          email: 'pessoa@email.com',
        },
        token: '%$WTRESGDF45wte@%#$WRTE5wqetrF',
      })
      .pipe (
        delay(3000),
        tap(response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        })
      );
    }

    return timer(3000).pipe(mergeMap(() => throwError(new Error('Usuário ou senha incorreto.'))));

  }
}
