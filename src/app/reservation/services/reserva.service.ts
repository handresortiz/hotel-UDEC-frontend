import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../../environments/environment';
import { Persona } from '../models/persona';
import { Cuenta } from '../models/cuenta';

export interface ReservaForm{
  cliente: Persona,
  id_habitaciones: number[],
  fec_inicio: string,
  fec_fin: string
}

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private API_URL = `${ environment.RESERVAS_URL }/reservas`

  constructor(
    private http: HttpClient
  ) { }

  public registrarReserva( form: ReservaForm ): Promise<Cuenta>{
    return this.http.post<Cuenta>( `${ this.API_URL }`, form ).toPromise()
  }
}
