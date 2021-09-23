import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  userDetails = JSON.parse(localStorage.getItem('UserDetails')!);

  constructor(private httpService: HttpServiceService) { }

  header: any = {
    headers: { Authorization: "Bearer " + this.userDetails.Token }
  };

  CreateNote(data: any) {
    data.UserId = this.userDetails.UserId;
    return this.httpService.post(`${environment.baseUrl}/api/Note`, data, true, this.header);
  }
  GetNote() {
    let data = this.userDetails.UserId;
    return this.httpService.post(`${environment.baseUrl}/api/GetNotes?userId=${data}`, null, true, this.header);
  }
  GetLabels() {
    return this.httpService.post(`${environment.baseUrl}/api/GetAllLabels?userId=${this.userDetails.UserId}`, null, true, this.header);
  }
  ReminderNotes() {
    return this.httpService.post(`${environment.baseUrl}/api/Get Reminder Notes?userId=${this.userDetails.UserId}`, null, true, this.header);
  }
  ArchiveNotes()
  {
    return this.httpService.post(`${environment.baseUrl}/api/Get Archive Notes?userId=${this.userDetails.UserId}`, null, true, this.header);
  }
}
