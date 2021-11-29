import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';


import { environment } from '../../../environments/environment';

import { Router } from '@angular/router';
import { LoginRequest } from '../interfaces/login-request';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: String = environment.microserviceLogin;
  private _usuario !: Response;
  
  get usuario() {
    return {...this._usuario};
  }

  constructor(private http: HttpClient,
              private router: Router) { }



  Authentication( user: LoginRequest): Observable<Response>{
    return this.http.post<Response>(`${ this.url }/signin`, user )
    .pipe(
      tap( resp => {
        if( resp.type ){
          localStorage.setItem('token', resp.token! );
          localStorage.setItem('login', resp.login );
        }
      }),
      map( resp => resp.type  ),
      catchError( err => of(err.error.message))
    )
  }

  getCredentials(): Observable<any>{
    const email = localStorage.getItem('login' || '');
    return this.http.get<any>(`${ this.url }/credentials?email=${ email }`)
  }



  logout(){
    localStorage.clear();
  }
}
