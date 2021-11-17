import { Component, OnInit } from '@angular/core';
import { HabitacionService } from "./habitacion.service";
import swal from'sweetalert2';
import { Router } from '@angular/router';
import { Habitaciones } from './models/Habitaciones';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss']
})
export class HabitacionesComponent implements OnInit {

  habitaciones : Habitaciones[];
  cantidadEstado : Array<any>;

  constructor(private habitacionService : HabitacionService,
    private router: Router) { }

  ngOnInit(): void {
    this.habitacionService.getHabitaciones().subscribe(
      habitaciones => this.habitaciones = habitaciones
    );
    this.habitacionService.getCantidadPorEstado().subscribe(
      cantidadEstado => this.cantidadEstado = cantidadEstado
    );
  }

  verLog(id : number){
    this.router.navigate(['/habitacion/detalle',id]);
  }

  realizarCheckIn(id : number){
    swal.fire({
      title: 'Estas seguro que deseas realizar el check-in?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.habitacionService.updateStateToOccupied(id)
        .subscribe(
          data => {
            this.router.navigate(['/habitaciones']);
            swal.fire("Actualizacion correcta", "Se realizo correctamente el Check-In", "success"); 
          }
        );
      } else if (result.isDenied) {

      }
    });
  }

  inactivarMantenimiento(id : number){
    swal.fire({
      title: 'Estas seguro de inactivar el mantenimiento?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.habitacionService.cambiarEstadoMantenimiento(id,false)
        .subscribe(
          data => {
            swal.fire("Inactivacion exitosa", "Se inactivo con exito el mantenimiento", "success"); 

            setTimeout(() => {
              location.reload();
            }, 300);

          }
        );
      } else if (result.isDenied) {

      }
    });
  }

  activarMantenimiento(id : number){
    swal.fire({
      title: 'Estas seguro de activar el mantenimiento?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.habitacionService.cambiarEstadoMantenimiento(id,true)
        .subscribe(
          data => {
            swal.fire("Activacion exitosa", "Se activo con exito el mantenimiento", "success"); 
            setTimeout(() => {
              location.reload();
            }, 300);
          }
        );
      } else if (result.isDenied) {

      }
    });
  }

  inactivarLimpieza(id : number){
    swal.fire({
      title: 'Estas seguro de inactivar la limpieza?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.habitacionService.cambiarEstadoLimpieza(id,false)
        .subscribe(
          data => {
            swal.fire("Inactivacion exitosa", "Se inactivo con exito la limpieza", "success"); 
            setTimeout(() => {
              location.reload();
            }, 300);
          }
        );
      } else if (result.isDenied) {

      }
    });
  }

  activarLimpieza(id: number){
    swal.fire({
      title: 'Estas seguro de activar la limpieza?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.habitacionService.cambiarEstadoLimpieza(id,true)
        .subscribe(
          data => {
            swal.fire("Activacion exitosa", "Se activo con exito la limpieza", "success"); 
            setTimeout(() => {
              location.reload();
            }, 300);
          }
        );
      } else if (result.isDenied) {

      }
    });
  }
}
