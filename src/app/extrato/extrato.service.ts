import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transacao } from './extrato.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getTransacoes() {
    // return throwError(new Error('Erro de carregamento'));
    return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`)
  }
}
