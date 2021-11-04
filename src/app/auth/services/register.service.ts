import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url: String = environment.microserviceRegister;

  constructor(private http: HttpClient) { }

  



}
