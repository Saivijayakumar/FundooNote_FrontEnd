import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http: HttpClient
  ) { }

  post(url: string, data: any = null, isHeaderRequired: any = false, headers: any = false) {
    console.log(url, data + "value");
    console.log(data);
    return this.http.post(url, data, isHeaderRequired && headers)
  }
  put(url: string, data: any = null, isHeaderRequired: any = false, headers: any = false) {
    console.log(url, data + "value");
    console.log(data);
    return this.http.put(url, data, isHeaderRequired && headers)
  }
  delete(url: string, data: any = null, isHeaderRequired: any = false, headers: any = false) {
    console.log("httpservice", url);
    console.log(url + "value");
    return this.http.delete(url, isHeaderRequired && headers)
  }
}
