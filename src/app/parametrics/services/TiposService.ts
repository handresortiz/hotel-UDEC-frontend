import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TipoDeHabitacion } from '../models/TipoDeHabitacion';

import { environment } from 'src/environments/environment';

@Injectable()
export class TiposService {

    private API_URL = `${environment.PARAMETRICAS_URL}/tipohabitacion`;

    constructor(private http: HttpClient) { }

    getTipos() {
        return this.http.get<TipoDeHabitacion[]>(this.API_URL)
        .toPromise()
        .then(data => { return data; });
    }

    createTipo(data: any): Promise<any>{
        return this.http.post(this.API_URL, data).toPromise();
    }

    deleteTipo(id: number): Promise<any>{
        return this.http.delete(`${this.API_URL}/${id}`).toPromise();
    }

    editTipo(id: number, data:any): Promise<any>{
        return this.http.put(`${this.API_URL}/${id}`, data).toPromise()
    }
}