import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/UserService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  hide = true;
  constructor(
    private userService:UserServiceService,
    private snackBar:MatSnackBar,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  LoginValidation(input:string){
    if (this.LoginForm.get(`${input}`)?.hasError('required')) {
      return `Add ${input}`;
    }
    return null;
  }
  
  Login() {
    this.userService.Login(this.LoginForm.value)
    .subscribe((status:any)=>{
      console.log(status);
      if(status.status == true){
        this.router.navigate(['/login']);
      }
      this.snackBar.open(`${status.message}`, '', { duration: 3000 });
      }, error => {
        this.snackBar.open(`${error.error.message}`, '', { duration: 3000 });
      })
  }
}
