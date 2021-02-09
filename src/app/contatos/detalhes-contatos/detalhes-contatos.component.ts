import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';
import { Contato } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detalhes-contatos',
  templateUrl: './detalhes-contatos.component.html',
  styleUrls: ['./detalhes-contatos.component.scss']
})
export class DetalhesContatosComponent implements OnInit {

  contato: Contato;
  estaCarregando: boolean;
  erroNoCarregamento: boolean;
  faLongArrowAltLeft = faLongArrowAltLeft;

  constructor(
    private route: ActivatedRoute,
    private contatosService: ContatosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.carregarContato();
  }

  carregarContato(){
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idContato = this.route.snapshot.paramMap.get('id');

    this.contatosService.getContato(idContato)
    .pipe (
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSucess(response),
      error => this.onError(error)
    );
  }

  onSucess(response: Contato) {
    this.contato = response;
    console.log(this.contato);
  }

  onError(error: any){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  voltar(){
    this.router.navigate([`contatos/`]);
  }

}
