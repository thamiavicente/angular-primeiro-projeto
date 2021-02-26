import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
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
        response => this.onSucessCarregarContato(response),
        error => this.onErrorCarregarContato(error)
      );
  }

  onSucessCarregarContato(response: Contato[]) {
    this.contatos = response;
  }

  onErrorCarregarContato(error: any){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  abrirDetalhes(idContato: string){
    this.router.navigate([`contatos/${idContato}`]);
  }

  deletarContato(idContato: string){
    this.contatosService.deleteContato(idContato)
    .subscribe(
      response => this.onSucessDeletarContato(idContato),
      error => this.onErrorDeletarContato()
    );
  }

  onSucessDeletarContato (idContato : string) {
    this.toastr.success('Tchau tchau!', 'Contato deletado com sucesso');
    this.contatos = this.contatos.filter(contato => contato.id !== idContato);
  }

  onErrorDeletarContato () {
    console.log('Erro ao deletar contato');
  }
}
