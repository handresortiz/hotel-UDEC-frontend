import { Component, OnInit } from '@angular/core';
import { Reserva } from '../habitaciones/models/Reserva';
import { ReservaService } from "./reserva.service";
import { Router } from '@angular/router';
import swal from'sweetalert2';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  reservas : Reserva[];
  idCliente: string;

  constructor(private reservaService: ReservaService,
    private router: Router) { }

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe(
      reservas => this.reservas = reservas
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
        this.reservaService.checkInReserva(id)
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
