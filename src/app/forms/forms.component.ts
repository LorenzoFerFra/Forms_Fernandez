import { Component } from '@angular/core';
import {  FormBuilder,
  FormControl,
  FormGroup,
  Validators,} from '@angular/forms';
  import Swal from 'sweetalert2';
import { noBoyValidator } from '../utils/validators';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})

export class FormsComponent {
  formulario = this.fb.group({
    name: ['', [noBoyValidator]],
    lastName: ['',Validators.required],
    password: ['',Validators.required],
    email: this.fb.control('', [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),Validators.required]),
  })
  get nameControl() {
    return this.formulario.get('name');
  }
  get lastNameControl() {
    return this.formulario.get('lastName');
  }
  get passwordControl() {
    return this.formulario.get('password');
  }
  get emailControl() {
    return this.formulario.get('email');
  }



  constructor(private fb: FormBuilder ){
    console.log("constructor")
  }
  onSubmit(): void {
    Swal.fire({
      icon: 'success',
      title: 'Registrado',
      text: 'Usuario registrado exitosamente',
    });
  }
}
