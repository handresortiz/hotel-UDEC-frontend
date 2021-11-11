import { Component, OnInit , Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HabitacionService } from '../habitaciones/habitacion.service';
import { Estado } from '../habitaciones/models/Estado';
import { Habitacion } from '../habitaciones/models/Habitacion';
import { Tipo } from '../habitaciones/models/Tipo';
import Swal from 'sweetalert2';

import { HabitacionEditStatusService } from './habitacion-edit-status.service';

@Component({
  selector: 'app-habitacion-edit-status',
  templateUrl: './habitacion-edit-status.component.html',
  styleUrls: ['./habitacion-edit-status.component.scss']
})
export class HabitacionEditStatusComponent implements OnInit {
  habitacion: Habitacion;
  tipos : Tipo[];
  estados : Estado[];

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

      this.habitacionEditStatusService.getEstados().subscribe(
        estados =>{
          this.estados = estados;
        }
      );

  }

  compararTipo(o1:Tipo, o2:Tipo):boolean{
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ?false:o1.id=== o2.id;
  }

  compararEstado(o1:Estado, o2:Estado):boolean{
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ?false:o1.id=== o2.id;
  }

  actualizarEstado() : void{
    this.habitacion.items = null;
    this.habitacionEditStatusService.updateStatusHabitacion(this.habitacion)
    .subscribe( json => {
      this.router.navigate(['/habitaciones']);
      Swal.fire('Habitacion actualizada', `Se ha actualizado con exito el estado de la habitacion!`, 'success');
    }
    );
  }


}
