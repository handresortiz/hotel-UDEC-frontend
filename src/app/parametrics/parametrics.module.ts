import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametricsRoutingModule } from './parametrics-routing.module';
import { TiposhabitacionesComponent } from './components/tiposhabitaciones/tiposhabitaciones.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

//Tabla para los tipos de habitación
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TiposService } from './services/TiposService';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    TiposhabitacionesComponent,
    HabitacionesComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    ParametricsRoutingModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
  ],
  providers: [TiposService, MessageService, ConfirmationService]
})
export class ParametricsModule { }
