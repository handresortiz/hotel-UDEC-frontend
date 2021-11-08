import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservarComponent } from './components/reservar/reservar.component';
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
//Reservar
import {CalendarModule} from 'primeng/calendar';
import{ FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';


//Detalles Habitacion
import {PanelModule} from 'primeng/panel';
import { ResumenReservaComponent } from './components/resumen-reserva/resumen-reserva.component';

// Resumen Reserva 
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import { TarjetaHabitacionComponent } from './components/tarjeta-habitacion/tarjeta-habitacion.component';

//
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [
    DetallesHabitacionComponent,
    CatalogoComponent,
    ReservarComponent,
    ResumenReservaComponent,
    TarjetaHabitacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GalleriaModule,
    ButtonModule,
    DynamicDialogModule,
    ReservationRoutingModule,
    CalendarModule,
    InputNumberModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    KeyFilterModule,
    ConfirmDialogModule,
    CardModule,
  ],
  providers: [
    PhotoService,
    DialogService,
    ConfirmationService
  ]
})
export class ReservationModule { }
