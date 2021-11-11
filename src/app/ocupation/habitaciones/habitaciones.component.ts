import { Component, OnInit } from '@angular/core';
import { Habitacion } from "./models/Habitacion";
import { HabitacionService } from "./habitacion.service";
import swal from'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss']
})
export class HabitacionesComponent implements OnInit {

  habitaciones : Habitacion[];
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
            this.router.navigate(['/reservas']);
            swal.fire("Actualizacion correcta", "Se realizo correctamente el Check-In", "success"); 
          }
        );
      } else if (result.isDenied) {

      }
    });
  }

}
