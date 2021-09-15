import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  hide = true;
  constructor() { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{1,}$'), Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{1,}$'), Validators.minLength(3)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*.!@$%^&(){}[]:;<>,.?/~_+-=|\).{4,}$'),Validators.minLength(8)])
    })
  }
  FirstNameValidation() {
    if (this.RegisterForm.get('firstName')?.hasError('required')) {
      return "Enter First Name";
    }
    else if (this.RegisterForm.get('firstName')?.hasError('pattern')) {
      return "First Letter should capital";
    }
    else if (this.RegisterForm.get('firstName')?.hasError('minlength')) {
      return "Should have Atlest 3 charecter"
    }
    return null;
  }
  LastNameValidation() {
    if (this.RegisterForm.get('lastName')?.hasError('required')) {
      return "Enter Last Name";
    }
    else if (this.RegisterForm.get('lastName')?.hasError('pattern')) {
      return "First Letter should capital";
    }
    else if (this.RegisterForm.get('lastName')?.hasError('minlength')) {
      return "Should have Atlest 3 charecter"
    }
    return null;
  }
  EmailValidation()
  {
    if (this.RegisterForm.get('email')?.hasError('required')) {
      return "You must enter a value";
    }
    else if (this.RegisterForm.get('email')?.hasError('email')) {
      return "Not a valid email";
    }
    return null;
}
PasswordValidation()
{
  if (this.RegisterForm.get('password')?.hasError('required')) {
    return "Enter password";
  }
  else if (this.RegisterForm.get('password')?.hasError('pattern')) {
    return "password contain atlest 1cap,1samll,1specialsymbol";
  }
  else if (this.RegisterForm.get('password')?.hasError('minlength')) {
    return "Length should be 8 charecter"
  }
  return null;
}
}
