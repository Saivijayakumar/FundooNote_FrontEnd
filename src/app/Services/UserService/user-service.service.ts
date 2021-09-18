import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private httpService : HttpServiceService
  ) { }

  Register(data:any){
    const params = {
      FirstName :data.firstName,
      LastName : data.lastName,
      Email :data.email,
      Password:data.password
    }
    return this.httpService.post(`${environment.baseUrl}/api/register`,params);
  }
  Login(data:any)
  {
    const params = {
      Email: data.email,
      Password: data.password
    }
    return this.httpService.post(`${environment.baseUrl}/api/login`,params);
  }
  Next(data:any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/ForgotPassword?email=${data}`);
  }
  RestPassword(data:any)
  {
    const params = {
      Email: localStorage.getItem("userName"),
      NewPassword: data.password,
      ConfirmNewPassword:data.confirmPassword
    }
    return this.httpService.put(`${environment.baseUrl}/api/ResetPassword`,params);
  }
}
