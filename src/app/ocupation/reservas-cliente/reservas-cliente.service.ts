import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reservaciones } from '../habitaciones/models/Reservaciones';


@Injectable()
export class ReservasClienteService {
  private urlEndPoint: string = 'http://localhost:8401/api/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }


  getReservaPorCliente(idCliente : number) :Observable<Reservaciones[]>{
    return this.http.get(`${this.urlEndPoint}/reserva/persona/${idCliente}`).pipe(
        map(response => response as Reservaciones[]));
  }

  checkInReserva(id: number) : Observable<Reservaciones>{
    return this.http.put<Reservaciones>(`${this.urlEndPoint}/reserva/checkin/${id}`,id);
    }
    
}
