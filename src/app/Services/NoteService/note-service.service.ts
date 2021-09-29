import { HttpParams } from '@angular/common/http';
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
  TrashNotes()
  {
    return this.httpService.post(`${environment.baseUrl}/api/Get Trash Notes?userId=${this.userDetails.UserId}`, null, true, this.header);
  }
  EmptyTrash(){
    return this.httpService.delete(`${environment.baseUrl}/api/Trash?userId=${this.userDetails.UserId}`,null,true, this.header);
  }
  RestoreNote(id:any)
  {
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/Restore Note`,params,true,this.header);
  }
  SendToTrash(id:any)
  {    
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/Send To Trash`,params,true,this.header);
  }
  DeleteForever(id:any)
  {
    return this.httpService.delete(`${environment.baseUrl}/api/permanently?noteId=${id}`,null,true,this.header);
  }
  AddImage(noteId:any,file:any)
  { 
    console.log(file);
    var data = new FormData();
    data.append("image",file);
    console.log(data);
     return this.httpService.post(`${environment.baseUrl}/api/Image?noteId=${noteId}`,data,true,this.header); 
      
  }
}
