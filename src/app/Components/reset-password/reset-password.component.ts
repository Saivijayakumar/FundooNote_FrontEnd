import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetPasswordForm! : FormGroup;
  hide1 = true;
  hide2 = true;
  
  constructor() { }

  ngOnInit(): void {
    this.ResetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*.!@$%^&(){}[]:;<>,.?/~_+-=|\).{4,}$'), Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

  FormValidation(input:string)
  {
    if (this.ResetPasswordForm.get(`${input}`)?.hasError('required')) {
      return `Enter ${input}`;
    }
    else if (this.ResetPasswordForm.get('password')?.hasError('pattern')) {
      return "At Least 1cap,1samll,1specialsymbol,1number";
    }
    else if (this.ResetPasswordForm.get('password')?.hasError('minlength')) {
      return "Length should be 8 charecter"
    }
    else if (this.ResetPasswordForm.get('email')?.hasError('email')) {
      return "Not a valid email";
    }
    return null;
  }
}