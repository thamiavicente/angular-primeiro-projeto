import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatosService } from '../contatos.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss']
})
export class NovoContatoComponent implements OnInit {

  contatoForm: FormGroup;
  faLongArrowAltLeft = faLongArrowAltLeft;

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.contatoForm = new FormGroup({
    //   nome: new FormControl(),
    //   banco: new FormControl(),
    // })

    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      cpf: ['', Validators.required],
      banco: ['', Validators.required],
      ag: ['', Validators.required],
      cc: ['', Validators.required],
    });
  }

  exibeErro(nomeControle: string) {
    if(!this.contatoForm.get(nomeControle)){
      return false;
    }
    return this.contatoForm.get(nomeControle).invalid && this.contatoForm.get(nomeControle).touched;
  }

  validateAllFormFields() {
    Object.keys(this.contatoForm.controls).forEach(field => {
      const control = this.contatoForm.get(field);
      control.markAsTouched();
      console.log('validou')
    });
  }

  onSubmit() {
    if (this.contatoForm.invalid) {
      console.log('entrou validação')
      this.validateAllFormFields();
      // return;
    }
    console.log('saiu validação')
    this.salvarContato();
  }

  salvarContato() {
    this.contatosService.postContato(this.contatoForm.value)
    .subscribe(
      response => this.onSucessSalvarContato(),
      error => this.onErrorSalvarContato(),
    );
  }

  onSucessSalvarContato() {
    this.toastr.success('Contato salvo com sucesso', 'Bem-vindo!');
    this.router.navigate(['contatos']);
  }

  onErrorSalvarContato() {
    this.toastr.error('Erro ao incluir contato', 'Ooops!');
  }

  voltar(){
    this.router.navigate([`contatos/`]);
  }
}
