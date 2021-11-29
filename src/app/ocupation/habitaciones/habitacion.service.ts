import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Habitaciones } from './models/Habitaciones';

@Injectable()
export class HabitacionService {
  private urlEndPoint: string = 'http://localhost:8401/api/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getHabitaciones(): Observable<Habitaciones[]>{
    return this.http.get(`${this.urlEndPoint}/habitaciones`).pipe(
      map(response => response as Habitaciones[]));
  }

  getCantidadPorEstado(): Observable<Array<any>>{
    return this.http.get(`${this.urlEndPoint}/cantidadexestado`).pipe(
      map(response => response as Array<any>));
  }

  updateStateToOccupied(id: number) : Observable<Habitaciones>{
    return this.http.put<Habitaciones>(`${this.urlEndPoint}/habitacion/updatestateoccupied/${id}`,id);
    }

    cambiarEstadoMantenimiento(id : number, estado : boolean){
      // 		@PutMapping("/habitacion/cambiarestadomantenimiento/{idhabitacion}/estado/{estado}")
      return this.http.put<Habitaciones>(`${this.urlEndPoint}/habitacion/cambiarestadomantenimiento/${id}/estado/${estado}`,id);
    }

    cambiarEstadoLimpieza(id : number, estado : boolean){
      //		@PutMapping("/habitacion/cambiarestadolimpieza/{idhabitacion}/estado/{estado}")
      return this.http.put<Habitaciones>(`${this.urlEndPoint}/habitacion/cambiarestadolimpieza/${id}/estado/${estado}`,id);

    }

}