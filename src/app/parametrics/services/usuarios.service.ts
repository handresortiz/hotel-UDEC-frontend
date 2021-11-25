import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Usuario} from '../models/usuario';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private API_URL = `${environment.PARAMETRICAS_URL }/usuarios`

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get<Usuario[]>(`${ this.API_URL }`)
    .toPromise()
  }

  createUsuario(data:any):Promise<any>{
    console.log(`${ this.API_URL }/agregar`)
   return this.http.post(`${ this.API_URL }/agregar`, data).toPromise();
  }

  editarUsuario(id:number, data:any): Promise<any>{
    return this.http.put(`${ this.API_URL }/actualizar/${id}`, data).toPromise();
  }
}
