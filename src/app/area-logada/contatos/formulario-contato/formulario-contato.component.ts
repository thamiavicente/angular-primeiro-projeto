import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContatosService } from '../contatos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { finalize, take } from 'rxjs/operators';
import { Contato } from '../contatos.interfaces';

@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styleUrls: ['./formulario-contato.component.scss']
})
export class FormularioContatoComponent implements OnInit {

  contatoForm: FormGroup;
  faLongArrowAltLeft = faLongArrowAltLeft;
  idContato: string;
  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.idContato = this.route.snapshot.paramMap.get('id');
    
    if (this.estaEditando()){
      this.carregarContato();
    }
  }

  estaEditando = () => Boolean(this.idContato);

  inicializarFormulario() {
    // this.contatoForm = new FormGroup({
    //   nome: new FormControl(),
    //   banco: new FormControl(),
    // })

    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      cpf: ['', Validators.required],
      dadosBancarios: this.formBuilder.group({
        banco: ['', Validators.required],
        ag: ['', Validators.required],
        cc: ['', Validators.required],
      }),
    });
  }

  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.contatosService.getContato(this.idContato)
      .pipe (
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSucessCarregarContato(response),
        error => this.onErrorCarregarContato(error)
      );
  }

  onSucessCarregarContato(response: Contato) {
    this.contatoForm.patchValue(response);
  }

  onErrorCarregarContato(error: any){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  exibeErro(nomeControle: string) {
    if(!this.contatoForm.get(nomeControle)){
      return false;
    }
    return this.contatoForm.get(nomeControle).invalid && this.contatoForm.get(nomeControle).touched;
  }

  validaCamposFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl){
        control.markAsTouched();
      } else if (control instanceof FormGroup){
        this.validaCamposFormulario(control);
      }
    });
  }

  onSubmit() {
    if (this.contatoForm.invalid) {
      this.validaCamposFormulario(this.contatoForm);
      return;
    }

    if (this.estaEditando()){
      this.salvarContato();
      return;
    }

    this.criarContato();
  }

  salvarContato() {
    this.contatosService.putContato(this.idContato, this.contatoForm.value)
    .subscribe(
      response => this.onSucessSalvarContato(),
      error => this.onErrorContato(),
    );
  }

  onSucessSalvarContato() {
    this.toastr.success('Contato editado com sucesso', 'Tudo certo!');
    this.router.navigate(['contatos']);
  }

  criarContato() {
    this.contatosService.postContato(this.contatoForm.value)
    .subscribe(
      response => this.onSucessCriarContato(),
      error => this.onErrorContato(),
    );
  }

  onSucessCriarContato() {
    this.toastr.success('Contato salvo com sucesso', 'Bem-vindo!');
    this.router.navigate(['contatos']);
  }

  onErrorContato() {
    this.toastr.error('Algo deu errado. Tentei novamente mais tarde.', 'Ooops!');
  }

  voltar(){
    this.router.navigate([`contatos/`]);
  }
}
