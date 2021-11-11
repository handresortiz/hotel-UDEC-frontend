import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';


import { environment } from '../../../environments/environment';

import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: String = environment.microserviceLogin;

  constructor(private http: HttpClient,
              private router: Router) { }

  Authentication( user: User): Observable<any>{
    return this.http.post<any>(`${ this.url }/validar`, user );
  }
}
