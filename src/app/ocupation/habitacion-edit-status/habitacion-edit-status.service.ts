import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habitacion } from '../habitaciones/models/Habitacion';
import { Observable} from 'rxjs';
import { Tipo } from '../habitaciones/models/Tipo';
import { Estado } from '../habitaciones/models/Estado';

@Injectable()
export class HabitacionEditStatusService {
  private urlEndPoint: string = 'http://localhost:8401/api';

  constructor(private http: HttpClient) { }

  getHabitacion(id: number): Observable<Habitacion>{
    return this.http.get<Habitacion>(`${this.urlEndPoint}/habitacion/${id}`);
  }

  updateStatusHabitacion(habitacion : Habitacion) : Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/habitacion/${habitacion.id}`,habitacion);
  }

  getTipos() : Observable<Tipo[]>{
    return this.http.get<Tipo[]>(`${this.urlEndPoint}/tipos`);
  }

  getEstados() : Observable<Estado[]>{
    return this.http.get<Estado[]>(`${this.urlEndPoint}/estados`);
  }

}
