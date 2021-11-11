import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitacion } from './models/Habitacion';
import { map } from 'rxjs/operators';

@Injectable()
export class HabitacionService {
  private urlEndPoint: string = 'http://localhost:8401/api/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getHabitaciones(): Observable<Habitacion[]>{
    return this.http.get(`${this.urlEndPoint}/habitaciones`).pipe(
      map(response => response as Habitacion[]));
  }

  getCantidadPorEstado(): Observable<Array<any>>{
    return this.http.get(`${this.urlEndPoint}/cantidadexestado`).pipe(
      map(response => response as Array<any>));
  }

  updateStateToOccupied(id: number) : Observable<Habitacion>{
    return this.http.put<Habitacion>(`${this.urlEndPoint}/habitacion/occupied/${id}`,id);
    }
}
