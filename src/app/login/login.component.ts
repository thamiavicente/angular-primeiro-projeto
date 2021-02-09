import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){
    if (form.invalid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();
      return
    }
  }

  exibeErro(nomeControle: string, form: FormGroup) {
    if(!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
