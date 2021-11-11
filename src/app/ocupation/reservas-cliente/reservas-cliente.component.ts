import { Component, OnInit } from '@angular/core';
import { Reserva } from '../habitaciones/models/Reserva';
import { ReservasClienteService } from "./reservas-cliente.service";
import { ActivatedRoute, Router } from '@angular/router';
import swal from'sweetalert2';

@Component({
  selector: 'app-reservas-cliente',
  templateUrl: './reservas-cliente.component.html',
  styleUrls: ['./reservas-cliente.component.scss']
})
export class ReservasClienteComponent implements OnInit {

  reservas : Reserva[];
  idCedula: string;

  constructor(private reservasClienteService : ReservasClienteService, 
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      params => {
        let clienteId = +params.get('idCedula');
        this.reservasClienteService.getReservaPorCliente(clienteId)
        .subscribe(
          data =>{
            this.reservas = data;
            reservas => this.reservas = reservas
          }, err=>{
            this.router.navigate(['/reservas']);
            swal.fire('Error', 'No existe un cliente con esa identificacion.', 'error');
          }

        );

      }
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
        this.reservasClienteService.checkInReserva(id)
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
