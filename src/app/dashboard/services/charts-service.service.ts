import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartsServiceService {

  private url = environment.microserviceCharts;

  constructor(private http: HttpClient) { }

  chartReservation(): Observable<Number[]>{
    return this.http.get<Number[]>(`${ this.url }/reservaciones/month`);
  }

  chartOcupation(): Observable<Number[]> {
    return this.http.get<Number[]>(`${ this.url }`);
  }

  chartBuys(): Observable<Number[]> {
    return this.http.get<Number[]>(`${ this.url }/ventas/month`);
  }

  chartServices(): Observable<Number[]> {
    return this.http.get<Number[]>(`${ this.url }/servicios/month`);
  }

  allDisponible(){
   return this.http.get<Number>(`${ this.url }/disponible`) ;
  }

  allOcupation(){
    return this.http.get<Number>(`${ this.url }/ocupacion`) ;
  }

   allClean(){
    return this.http.get<Number>(`${ this.url }/limpieza`) ;
  }

   allManteinance(){
    return this.http.get<Number>(`${ this.url }/mantenimiento`) ;
  }

  getChartReservation(){
    return this.chartReservation()
    .pipe(
      delay(1500),
      map( data => {
        const values = Object.values( data )
        return values;
      })
    )
  }



}
