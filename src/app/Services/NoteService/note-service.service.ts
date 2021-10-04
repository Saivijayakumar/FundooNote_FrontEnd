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
  Pin(id:any)
  {
    return this.httpService.put(`${environment.baseUrl}/api/Pin?noteId=${id}`,null,true,this.header);
  }
  UnPin(id:any)
  {
    return this.httpService.put(`${environment.baseUrl}/api/UnPin?noteId=${id}`,null,true,this.header);
  }
  UnArchieve(id:any)
  {
    return this.httpService.put(`${environment.baseUrl}/api/UnArchieve?noteId=${id}`,null,true,this.header);
  }
  Archieve(id:any)
  {
    return this.httpService.put(`${environment.baseUrl}/api/Archieve?noteId=${id}`,null,true,this.header);
  }
  ChangeReminder(id:any,rem:any)
  {
    var data;
    console.log(id,rem);
    data = {noteId:id,remindMe:rem};
    return this.httpService.post(`${environment.baseUrl}/api/AddReminder`,data,true,this.header);
  }
  RemoveReminder(id:any)
  {
    console.log(id);
    return this.httpService.put(`${environment.baseUrl}/api/RemoveReminder?noteId=${id}`,'',true,this.header);
  }
  UpdateNote(note:any)
  {
    return this.httpService.put(`${environment.baseUrl}/api/Update`,note,true,this.header);
  }
  AddImage(noteId:any,file:any)
  { 
    console.log(file);
    var data = new FormData();
    data.append("image",file);
    console.log(data);
     return this.httpService.post(`${environment.baseUrl}/api/Image?noteId=${noteId}`,data,true,this.header); 
  }
  GetAllCollaborator(token: any,data: any) {
    console.log(this.header);
    return this.httpService.post(`${environment.baseUrl}/api/Collaborator?noteId=${data}`,null,true,this.header);
  }
  AddCollaborator(collaboraters: any) {
    console.log(collaboraters.receiverEmail);
    console.log(this.header);
    return this.httpService.post(`${environment.baseUrl}/api/Collaborator`,collaboraters,true,this.header);
  }
  RemoveCollaborator(data: any) {
    console.log(this.header);
    return this.httpService.delete(`${environment.baseUrl}/api/Collaborator?CollaboratorId=${data}`,null,true,this.header);
  }
  GetLableNotes(label:any){
    const params={
      LabelName : label.labelName,
      UserId : this.userDetails.UserId
    }
    return this.httpService.post(`${environment.baseUrl}/api/GetNotesofLabel`,params,true,this.header);
  }
  ChangeNoteColor(id:any,color:any)
  {
    var data;
    console.log(id,color);
    data = {noteId:id,color:color};
    return this.httpService.put(`${environment.baseUrl}/api/color`,data,true,this.header);
  }
}
