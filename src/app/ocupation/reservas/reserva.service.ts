import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reservaciones } from '../habitaciones/models/Reservaciones';

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

}
