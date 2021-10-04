import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class LabelServiceService {
  userDetails = JSON.parse(localStorage.getItem('UserDetails')!);

  constructor(private httpService: HttpServiceService) { }

  header: any = {
    headers: { Authorization: "Bearer " + this.userDetails.Token }
  };
  EditLabel(label: any) {
    console.log(label);
    return this.httpService.put(`${environment.baseUrl}/api/Label`, label, true,this.header);
  }

  DeleteLabel(labelName: any) {
    console.log(labelName);
    return this.httpService.delete(`${environment.baseUrl}/api/Label?labelName=${labelName.labelName}&userId=${this.userDetails.UserId}`,null, true, this.header);
  }
  AddLabel(labelName: string) {
    let params = {
      labelName: labelName,
      userId: this.userDetails.UserId
    };
    console.log(labelName);
    return this.httpService.post(`${environment.baseUrl}/api/Label`, params, true,this.header);
  }
}
