import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { environment } from '../../../environments/environment';
import { Profile } from '../interfaces/profile';
import { Person } from '../interfaces/person';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url: String = environment.microserviceRegister;

  constructor(private http: HttpClient) { }


  registerProfile( profile: Profile): Observable<any>{
    return this.http.post<any>(`${ this.url }/perfil/agregar`,profile);
  }

  registerPerson( person: Person): Observable<any> {
    return this.http.post<any>(`${ this.url }/persona/agregar`, person);
  }

  registerUser( user: User): Observable<any>{
    return this.http.post(`${ this.url }/usuario/agregar`,user);
  }

  



}
