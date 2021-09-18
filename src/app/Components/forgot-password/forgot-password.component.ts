import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotPasswordForm!: FormGroup;
  constructor(
    private userService:UserServiceService,
    private snackBar:MatSnackBar,
    private router:Router
  ) { }

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
  Next() {
    this.userService.Next(this.ForgotPasswordForm.value.email)
    .subscribe((status:any)=>{
      console.log(status);
      if(status.status == true){
        localStorage.setItem("token",`${status.data}`);
        localStorage.setItem("userName",`${this.ForgotPasswordForm.value.email}`);
      }
      this.snackBar.open(`${status.message}`, '', { duration: 3000 });
      }, error => {
        this.snackBar.open(`${error.error.message}`, '', { duration: 3000 });
      })
  }
}
