import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Email } from '../interfaces/email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private url = environment.microserviceEmail;

  constructor(private http: HttpClient) { }

  sendEmail( email: Email): Observable<any>{
    return this.http.post(`${ this.url }/send` ,email );
  }

}
