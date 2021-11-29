import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habitacion } from '../models/habitacion';
import { TipoDeHabitacion } from '../models/tipohabitacion';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  private API_URL = environment.PARAMETRICAS_URL;

  constructor(private http: HttpClient) { }

  getHabitaciones() {
    return this.http.get<Habitacion[]>(`${this.API_URL}/habitacion/filtrar`)
      .toPromise()
  }

  getTiposHabitaciones() {
    return this.http.get<TipoDeHabitacion[]>(`${this.API_URL}/tipohabitacion`)
      .toPromise()
  }

  CrearHabitacion(data: any): Promise<any> {
    return this.http.post(`${this.API_URL}/habitacion/`, data).toPromise();
  }

  EditarHabitacion(id: number, data: any): Promise<any> {
    return this.http.put(`${this.API_URL}/habitacion/${id}`, data).toPromise();
  }

  EliminarHabitacion(id: number): Promise<any> {
    return this.http.delete(`${this.API_URL}/habitacion/${id}`).toPromise();
  }

}
