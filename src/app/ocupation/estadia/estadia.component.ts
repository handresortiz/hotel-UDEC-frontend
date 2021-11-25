import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ReservaService } from "./../reservas/reserva.service";
@Component({
  selector: 'app-estadia',
  templateUrl: './estadia.component.html',
  styleUrls: ['./estadia.component.scss']
})
export class EstadiaComponent implements OnInit {
  reserva:any;
  reserva1:any;
  term:any
  r:any
  ocultar:boolean=false
  display:false
  constructor(private reservaService:ReservaService) { }

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe(
      reservas => {
      this.reserva  =  reservas.filter(reservas=> reservas.habitacion.estado == 'L' || reservas.habitacion.estado == 'M')
      });
  }

  horarioCheck(){
    Swal.fire({
      title: '<strong>Horarios</strong>',
      icon: 'info',
      html:
        'Horario Check-in:<strong>12:00 AM</strong> ' +
       '<br/>' +
        'Horario Check-out:<strong>12:00 PM</strong>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Ok',
    })
  }
 
  estados(info){
    if(info == 'O'){
      return 'Ocupado'
    }else if(info == 'L' || info == 'M'){
      return 'Entregada'
    }
    }

  factura(e){
   console.log(e)
   this.r =e
   this.reserva1 =  e.cuenta.huesped.persona
  }
}
