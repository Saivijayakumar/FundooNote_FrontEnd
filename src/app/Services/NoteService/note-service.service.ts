import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  userDetails = JSON.parse(localStorage.getItem('UserDetails')!);

  constructor(private httpService : HttpServiceService) { }

  header:any = {
    headers:{ Authorization:"Bearer " + this.userDetails.Token }
  };

  CreateNote(data:any){
    data.UserId = this.userDetails.UserId;
    return this.httpService.post(`${environment.baseUrl}/api/Note`,data,true,this.header);
  }
}
