import { Component, OnInit , Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

import { HabitacionEditStatusService } from './habitacion-edit-status.service';
import { Habitaciones } from '../habitaciones/models/Habitaciones';
import { TipoHabitacion } from '../habitaciones/models/TipoHabitacion';

@Component({
  selector: 'app-habitacion-edit-status',
  templateUrl: './habitacion-edit-status.component.html',
  styleUrls: ['./habitacion-edit-status.component.scss']
})
export class HabitacionEditStatusComponent implements OnInit {
  habitacion: Habitaciones;
  tipos : TipoHabitacion[];

  constructor(private habitacionEditStatusService : HabitacionEditStatusService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params=>{
        let id  =+ params.get('id');
        if(id){
          this.habitacionEditStatusService.getHabitacion(id).subscribe(
            habitacion =>{
              this.habitacion = habitacion;
            }
          );
        }
      }
    );
      this.habitacionEditStatusService.getTipos().subscribe(
        tipos =>{
          this.tipos = tipos;
        }
      );

  }

  compararTipo(o1:TipoHabitacion, o2:TipoHabitacion):boolean{
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ?false:o1.id_tipo_habitacion=== o2.id_tipo_habitacion;
  }


  actualizarEstado() {
    console.log('Actualizar ')
    console.log(this.habitacion.estado)
    switch(this.habitacion.estado) {
      case 'L':{
        console.log('Limpieza')
        this.habitacionEditStatusService.cambiarEstadoLimpieza(this.habitacion.id_habitacion, true).subscribe(res=>{
          this.router.navigate(['/habitaciones']);
          Swal.fire('Habitacion actualizada', `¡Se ha actualizado con exito el estado de la habitacion!`, 'success');
        })
      }
        break;
          case 'M':{
            this.habitacionEditStatusService.cambiarEstadoMantenimiento(this.habitacion.id_habitacion, true).subscribe(res=>{
              this.router.navigate(['/habitaciones']);
              Swal.fire('Habitacion actualizada', `¡Se ha actualizado con exito el estado de la habitacion!`, 'success');
            })
          }
            break;
            case 'O':{
               this.habitacionEditStatusService.updateStatusHabitacion(this.habitacion)
    .subscribe( json => {
      this.router.navigate(['/habitaciones']);
      if(this.habitacion.estado=='O'|| this.habitacion.estado=='L'|| this.habitacion.estado=='D'|| this.habitacion.estado=='M'|| this.habitacion.estado=='R'){
        Swal.fire('Habitacion actualizada', `¡Se ha actualizado con exito el estado de la habitacion!`, 'success');
      }
      else{

      Swal.fire('¡Error!', `Error en el ingreso de datos, verifique e intente nuevamente`, 'error');}
      
    }
    );
            }
              break;
    
      default:
        break;
    }
  }

  getEstado(e:any){
    if(e == 'R'){
      return 'R'
    }else{
      return 'D'
    }
  }
}

