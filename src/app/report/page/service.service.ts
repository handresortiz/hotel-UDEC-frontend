import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habitaciones } from "./modelo/habitaciones";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

habitaciones:Habitaciones[];

  constructor(private http:HttpClient) { }

  Url='http://localhost:8505/ocupacion/list';

  getHabitaciones(): Observable<Habitaciones[]>{
  return this.http.get<Habitaciones[]>(this.Url);
  } 
}
