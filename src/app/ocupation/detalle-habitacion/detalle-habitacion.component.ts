import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleHabitacionService } from './detalle-habitacion.service';
import { LogCambioEstado } from '../habitaciones/models/LogCambioEstado';
import swal from'sweetalert2';

@Component({
  selector: 'app-detalle-habitacion',
  templateUrl: './detalle-habitacion.component.html',
  styleUrls: ['./detalle-habitacion.component.scss']
})
export class DetalleHabitacionComponent implements OnInit {
  logs : LogCambioEstado[];
  id : number;

  constructor(private detalleHabitacionService : DetalleHabitacionService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      params =>{
        let habitacionId =+ params.get('id');
        this.detalleHabitacionService.getDetalleHabitacion(habitacionId)
        .subscribe(
          data =>{
            this.logs = data;
            log => this.logs = log;
            console.log(data);
          },
          arr=>{
            this.router.navigate(['/habitaciones']);
            swal.fire('Error', 'No existe una habitacion con ese id', 'error');
         
          }
        );
      }
    );
  }

}
