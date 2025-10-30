import { Component } from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {RouterLink} from '@angular/router';
import {Checkbox} from 'primeng/checkbox';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Password} from 'primeng/password';

@Component({
  selector: 'app-signin',
  imports: [
    InputText,
    RouterLink,
    Checkbox,
    ReactiveFormsModule,
    Password,
  ],
  templateUrl: './signin.html',
  styles: ``,
})
export class Signin {
  signinForm = new FormGroup({
    loginEmail: new FormControl(),
    loginPassword: new FormControl(),
  });

  onSubmit() {
    const email: string = this.signinForm.controls.loginEmail.value;
    const password: string = this.signinForm.controls.loginPassword.value;

    console.log("Email: ", email);
    console.log("Password: ", password);
  }
}
