import { Component } from '@angular/core';
import {InputText} from "primeng/inputtext";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
    imports: [
        InputText,
        ReactiveFormsModule,
    ],
  templateUrl: './forgot-password.html',
  styles: ``,
})
export class ForgotPassword {
  resetPasswordForm = new FormGroup({
    resetEmail: new FormControl(),
  });

  onSubmit() {
    const email: string = this.resetPasswordForm.controls.resetEmail.value;

    console.log("Email: ", email);
  }
}
