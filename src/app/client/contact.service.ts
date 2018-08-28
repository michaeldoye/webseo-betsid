import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  endpoint: string = 'https://api.webseo.co.za/betsid';
  clientkey: string = 'ce43259f2792e045c5099df7fbd8f61c';

  constructor(private http: HttpClient) { }

  sendMessage(data: any) {
    console.log(data);
    return this.http.get(`${this.endpoint}/${this.clientkey}/${btoa(data.email)}/${data.subject}/${data.message}/${data.name}`)
  }
}
