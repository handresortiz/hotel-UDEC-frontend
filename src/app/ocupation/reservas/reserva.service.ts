import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reserva } from '../habitaciones/models/Reserva';

@Injectable()
export class ReservaService {
  private urlEndPoint: string = 'http://localhost:8401/api/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getReservas() :Observable<Reserva[]>{
    return this.http.get(`${this.urlEndPoint}/reservas`).pipe(
      map(response => response as Reserva[])); 
  }

  checkInReserva(id: number) : Observable<Reserva>{
    return this.http.put<Reserva>(`${this.urlEndPoint}/reserva/checkin/${id}`,id);
    }

}
