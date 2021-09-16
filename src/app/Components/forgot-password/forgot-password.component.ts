import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotPasswordForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.ForgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  EmailValidation() {
    if (this.ForgotPasswordForm.get('email')?.hasError('required')) {
      return "Add Email";
    }
    else if (this.ForgotPasswordForm.get('email')?.hasError('email')) {
      return "Not a valid email";
    }
    return null;
  }
}
