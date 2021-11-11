import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reserva } from '../habitaciones/models/Reserva';

@Injectable()
export class ReservasClienteService {
  private urlEndPoint: string = 'http://localhost:8401/api/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }


  getReservaPorCliente(idCliente : number) :Observable<Reserva[]>{
    return this.http.get(`${this.urlEndPoint}/reservas/${idCliente}`).pipe(
        map(response => response as Reserva[]));
  }

  checkInReserva(id: number) : Observable<Reserva>{
    return this.http.put<Reserva>(`${this.urlEndPoint}/reserva/checkin/${id}`,id);
    }
    
}
