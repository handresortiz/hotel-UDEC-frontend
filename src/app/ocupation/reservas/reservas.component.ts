import { Component, OnInit } from '@angular/core';
import { Reservaciones } from '../habitaciones/models/Reservaciones';
import { ReservaService } from "./reserva.service";
import { Router } from '@angular/router';
import swal from'sweetalert2';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  reservas : Reservaciones[];
  reservas1 :any;
  r :any;
  modal: boolean = false
  checkIn : Reservaciones[];
  checkOut : Reservaciones[];
  idCliente: any;
  valores:any;
  display=false; 
  term:any
  con:any

  constructor(private reservaService: ReservaService,
    private router: Router) { }

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe(
      reservas => {
        console.log(reservas)
        this.reservas = reservas.filter(reservas=> reservas.habitacion.estado == 'R')
        this.checkIn = reservas.filter(reservas=> reservas.habitacion.estado =='O')
        this.checkOut = reservas.filter(reservas=> reservas.habitacion.estado == 'L' || reservas.habitacion.estado == 'M')

      }
    );
  }

search(e){
  this.reservaService.getReservas().subscribe(
    reservas => {
     let  info = reservas.filter(reservas=> reservas.habitacion.estado == 'R')
      if (e.target.value.length > 0){
        this.reservas=info.filter(info=>info.cuenta.huesped.persona.id_persona == e.target.value )
          }else{
            this.reservas = this.reservas = reservas.filter(reservas=> reservas.habitacion.estado == 'R')
    }
    }); 
 
}
  
  realizarCheckIn(id : number, estado:any){
    swal.fire({
      title: '¿Estas seguro que deseas realizar el check-in?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        estado.estado='O'
        this.reservaService.updateStatusHabitacion(estado)
        .subscribe(
          data => {
            swal.fire("Actualizacion correcta", "Se realizo correctamente el Check-In", "success"); 
            this.ngOnInit()
          }, error=>{
            console.log(error)
          }
        );
      } else if (result.isDenied) {

      }
    });
  }
  
checkOut2(e){
   this.con = e
  swal.fire({
    title: '¿Estas seguro que deseas realizar el check-Out?',
    showDenyButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
   
    if (result.isConfirmed) {
    this.display = true
  }
}); console.log(e)

}

prueba(){
  console.log(this.con)
  this.con.habitacion.estado = this.valores
  if(this.valores == 'L'){
    console.log('Estas en Limpieza')
    this.reservaService.cambiarEstadoLimpieza(this.con.habitacion.id_habitacion,true)
    .subscribe(data=>{
      this.ngOnInit()
      swal.fire("Actualizacion correcta", "La habitacion se encuentra en Limpieza", "success"); 
      }, error=>{
        console.log(error)
      })
  }else if(this.valores == 'M'){
    this.reservaService.cambiarEstadoMantenimiento(this.con.habitacion.id_habitacion,true)
    .subscribe(data=>{
      this.ngOnInit()
      swal.fire("Actualizacion correcta", "La habitacion se encuentra en Mantenimiento", "success"); 
      }, error=>{
        console.log(error)
      })
  }

}

estados(info){
if(info == 'O'){
  return 'Ocupado'
}else if(info == 'L' || info == 'M'){
  return 'Entregada'
}
}

capUsu(e:any ){
  this.modal= true
  this.r= e
this.reservas1 = e.cuenta.huesped.persona
}

}
