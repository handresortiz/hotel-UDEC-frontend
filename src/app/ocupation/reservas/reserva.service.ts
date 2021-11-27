import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reservaciones } from '../habitaciones/models/Reservaciones';
import { Habitaciones } from '../habitaciones/models/Habitaciones';

@Injectable()
export class ReservaService {
  private urlEndPoint: string = 'http://localhost:8401/api/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getReservas() :Observable<Reservaciones[]>{
    return this.http.get(`${this.urlEndPoint}/reservas`).pipe(
      map(response => response as Reservaciones[])); 
  }

  checkInReserva(id: number) : Observable<Reservaciones>{
    return this.http.put<Reservaciones>(`${this.urlEndPoint}/reserva/checkin/${id}`,id);
    }

    updateStatusHabitacion(habitacion : any) : Observable<any> {
      //	@PutMapping("/habitacion/updatestate/{idhabitacion}/estado/{estado}")
      console.log(habitacion.estado)
      return this.http.put<any>(`${this.urlEndPoint}/habitacion/updatestate/${habitacion.id_habitacion}/estado/${habitacion.estado}`,habitacion);
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
