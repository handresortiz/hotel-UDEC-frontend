import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Habitaciones } from '../habitaciones/models/Habitaciones';
import { TipoHabitacion } from '../habitaciones/models/TipoHabitacion';


@Injectable()
export class HabitacionEditStatusService {
  private urlEndPoint: string = 'http://localhost:8401/api';

  constructor(private http: HttpClient) { }

  getHabitacion(id: number): Observable<Habitaciones>{
    return this.http.get<Habitaciones>(`${this.urlEndPoint}/habitacion/${id}`);
  }

  updateStatusHabitacion(habitacion : Habitaciones) : Observable<any> {
    //	@PutMapping("/habitacion/updatestate/{idhabitacion}/estado/{estado}")
    return this.http.put<any>(`${this.urlEndPoint}/habitacion/updatestate/${habitacion.id_habitacion}/estado/${habitacion.estado}`,null);
  }

  getTipos() : Observable<TipoHabitacion[]>{
    return this.http.get<TipoHabitacion[]>(`${this.urlEndPoint}/tipos`);
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

