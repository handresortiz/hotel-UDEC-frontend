import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Personas} from '../pages/modelo/personas';
import {Huespedes} from '../pages/modelo/huespedes';
@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  personas:Personas[];
  huespedes:Huespedes[];
  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8501/personas/buscar';
  Url1 = 'http://localhost:8501/huespedes/buscar';

  onSearch(identification: number): Observable<Personas>{
    return this.http.get<Personas>(`${ this.Url }/${identification}`);
  }
  busqueda(id: number): Observable<Huespedes>{
    return this.http.get<Huespedes>(`${ this.Url1 }/${id}`);
  }

}
