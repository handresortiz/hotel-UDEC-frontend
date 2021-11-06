import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { DetallesHabitacionComponent } from './components/detalles-habitacion/detalles-habitacion.component';

//Galeria de imágenes
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from './services/photoservice';
import { ButtonModule } from 'primeng/button';

//Overlay de detalles
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    DetallesHabitacionComponent,
    CatalogoComponent,
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    ButtonModule,
    DynamicDialogModule,
    ReservationRoutingModule
  ],
  providers: [
    PhotoService,
    DialogService
  ]
})
export class ReservationModule { }
