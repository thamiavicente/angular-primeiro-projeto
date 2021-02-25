import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  faLongArrowAltRight = faLongArrowAltRight;
  faLongArrowAltLeft = faLongArrowAltLeft;

  pagina = 1;

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

    const page = 1;

    this.extratoService.getTransacoes(this.pagina)
      .pipe (
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSucess(response),
        error => this.onError(error)
      );
  }

  onSucess(response: Transacao[]) {
    this.transacoes = response;
  }

  onError(error: any){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  paginaAnterior(){
    this.pagina = this.pagina - 1;
    this.carregarExtrato();
  }

  paginaProxima(){
    this.pagina = this.pagina + 1;
    this.carregarExtrato();
  }
}
