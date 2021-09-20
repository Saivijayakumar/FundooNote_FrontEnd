import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private httpService : HttpServiceService) { }

  header = {
    headers:{ Authorization:"Bearer " + localStorage.getItem('Token') }
  };

  CreateNote(data:any){
    return this.httpService.post(`${environment.baseUrl}/api/register`,data,true);
  }
}
