import { Component } from '@angular/core';
import {Checkbox} from 'primeng/checkbox';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {Divider} from 'primeng/divider';

@Component({
  selector: 'app-signup',
  imports: [
    Checkbox,
    InputText,
    Password,
    ReactiveFormsModule,
    RouterLink,
    Divider
  ],
  templateUrl: './signup.html',
  styles: ``,
})
export class Signup {
  signupForm = new FormGroup({
    signupEmail: new FormControl(),
    signupPassword: new FormControl(),
  });

  onSubmit() {
    const email: string = this.signupForm.controls.signupEmail.value;
    const password: string = this.signupForm.controls.signupPassword.value;

    console.log("Email: ", email);
    console.log("Password: ", password);
  }
}
