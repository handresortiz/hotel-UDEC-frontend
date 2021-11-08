import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../../environments/environment';
import { TipoHabitacion } from '../models/tipohabitacion';

export interface CatalogFilter{
  num_habitaciones?: number;
  num_adultos: number;
  num_ninos?: number;
  fec_inicio: string;
  fec_fin: string;
}


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private API_URL = `${ environment.RESERVAS_URL }`

  constructor(
    private http: HttpClient
  ) {}

  public getCatalogo( filter: CatalogFilter ): Promise<TipoHabitacion[]>{

    let query = '';
    for ( const[ key, value ] of Object.entries( filter ) ){
      if ( value ){
        query += `${ key }=${ value }&`;
      }
    }

    query = query.slice(0, query.length)


    return this.http.get<TipoHabitacion[]>( `${ this.API_URL }/habitaciones/filtro?${ query }`).toPromise()
  }

  public getTipoHabitacion( id: number ): Promise<TipoHabitacion>{
    return this.http.get<TipoHabitacion>( `${ this.API_URL }/habitaciones/tipo/${ id }` ).toPromise()
  }
}
