import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogCambioEstado } from '../habitaciones/models/LogCambioEstado';

@Injectable()
export class DetalleHabitacionService {
  private urlEndPoint: string = 'http://localhost:8401/api';

  constructor(private http: HttpClient) { }

  getDetalleHabitacion(id: number) : Observable<LogCambioEstado[]>{
  return this.http.get<LogCambioEstado[]>(`${this.urlEndPoint}/logestados/${id}`);
  }



}
