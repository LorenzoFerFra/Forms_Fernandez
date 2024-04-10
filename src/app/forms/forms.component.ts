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
    name: this.fb.control(''),
    lastName: this.fb.control(''),
    email: this.fb.control(''),
  })
  constructor(private fb: FormBuilder ){
  }
  
}
