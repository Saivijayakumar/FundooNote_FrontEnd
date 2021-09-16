import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  hide = true;
  isVisible = true;
  constructor(
    private userService : UserServiceService
  ) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{1,}$'), Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{1,}$'), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*.!@$%^&(){}[]:;<>,.?/~_+-=|\).{4,}$'), Validators.minLength(8)]),
      confirmPassword : new FormControl('',[Validators.required])
    })
  }
  NameValidation(input:string) {
    if (this.RegisterForm.get(`${input}`)?.hasError('required')) {
      return `Enter ${input}`;
    }
    else if (this.RegisterForm.get(`${input}`)?.hasError('pattern')) {
      return "First Letter should capital";
    }
    else if (this.RegisterForm.get(`${input}`)?.hasError('minlength')) {
      return "Should have Atlest 3 charecter"
    }
    return null;
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

  Register(){
    this.userService.Register(this.RegisterForm.value)
    .subscribe((status:any)=>{
      console.log(status);
    });
  }
}
