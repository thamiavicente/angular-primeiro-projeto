import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';
import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Array<Transacao>;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private extratoService: ExtratoService
  ) { }

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.extratoService.getTransacoes()
      .subscribe(
        response => this.onSucess(response),
        error => this.onError(error)
      );
  }

  onSucess(response: Transacao[]) {
    this.estaCarregando = false;
    this.transacoes = response;
  }

  onError(error: any){
    this.estaCarregando = false;
    this.erroNoCarregamento = true;
    console.error(error);
  }

}
