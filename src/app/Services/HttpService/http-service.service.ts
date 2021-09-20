import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http: HttpClient
  ) { }

  post(url: string, data: any = null, isHeaderRequired: any = false, headers : any = false) {
    console.log(url, data + "value");
    return this.http.post(url, data, isHeaderRequired && headers)
  }
  put(url: string, data: any = null, isHeaderRequired: any = false, headers: any = false) {
    console.log(url, data + "value");
    return this.http.put(url, data, isHeaderRequired && headers)
  }

}
