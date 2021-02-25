import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';
import { Contato } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class ListarContatosComponent implements OnInit {

  contatos: Array<Contato>;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private contatosService: ContatosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.carregarContato();
  }

  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.contatosService.getContatos()
      .pipe (
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSucess(response),
        error => this.onError(error)
      );
  }

  onSucess(response: Contato[]) {
    this.contatos = response;
  }

  onError(error: any){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  abrirDetalhes(idContato: string){
    this.router.navigate([`contatos/${idContato}`]);
  }

}
