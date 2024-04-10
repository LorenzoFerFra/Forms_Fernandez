import { Component } from '@angular/core';
import {  FormBuilder,
  FormControl,
  FormGroup,
  Validators,} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})

export class FormsComponent {
  formulario = this.fb.group({
    name: [''],
    lastName: ['', Validators.name],
    email: this.fb.control('', Validators.email),
  })
  constructor(private fb: FormBuilder ){
    console.log("constructor")
  }
  onSubmit(): void {
    console.log("probando 123aasdASDASDSA")
    alert('Usuario creado' + JSON.stringify(this.formulario.value));
  }
}
