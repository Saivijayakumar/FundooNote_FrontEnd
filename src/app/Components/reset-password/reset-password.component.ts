import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetPasswordForm! : FormGroup;
  hide1 = true;
  hide2 = true;
  
  constructor(
    private userService:UserServiceService,
    private snackBar:MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ResetPasswordForm = new FormGroup({
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
    return null;
  }
  RestPassword() {
    this.userService.RestPassword(this.ResetPasswordForm.value)
    .subscribe((status:any)=>{
      console.log(status);
      if(status.status == true){
        //localStorage.clear();
        this.router.navigate(['/login']);
      }
      this.snackBar.open(`${status.message}`, '', { duration: 3000 });
      }, error => {
        this.snackBar.open(`${error.error.message}`, '', { duration: 3000 });
      })
  }
}