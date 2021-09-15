import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  RegisterForm!: FormGroup;
  hide = true;
  constructor() { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*.!@$%^&(){}[]:;<>,.?/~_+-=|\).{4,}$'), Validators.minLength(8)])
    })
  }

  EmailValidation() {
    if (this.RegisterForm.get('email')?.hasError('required')) {
      return "Add Email";
    }
    else if (this.RegisterForm.get('email')?.hasError('email')) {
      return "Not a valid email";
    }
    return null;
  }
  PasswordValidation() {
    if (this.RegisterForm.get('password')?.hasError('required')) {
      return "Enter password";
    }
    else if (this.RegisterForm.get('password')?.hasError('pattern')) {
      return "At Least 1cap,1samll,1specialsymbol,1number";
    }
    else if (this.RegisterForm.get('password')?.hasError('minlength')) {
      return "Length should be 8 charecter"
    }
    return null;
  }
}
