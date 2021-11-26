import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { environment } from '../../../environments/environment';
import { SignupRequest } from '../interfaces/signup-request';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url: String = environment.microserviceRegister;

  constructor(private http: HttpClient) { }

  registerUser( user: SignupRequest): Observable<any>{
    return this.http.post(`${ this.url }/signup`,user);
  }

  



}
