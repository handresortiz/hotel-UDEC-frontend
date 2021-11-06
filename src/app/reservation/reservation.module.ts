import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { DetallesHabitacionComponent } from './components/detalles-habitacion/detalles-habitacion.component';

//Galeria de imágenes
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from './services/photoservice';


@NgModule({
  declarations: [DetallesHabitacionComponent],
  imports: [
    CommonModule,
    GalleriaModule,
    ReservationRoutingModule
  ],
  providers: [PhotoService]
})
export class ReservationModule { }
