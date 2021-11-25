import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametricsRoutingModule } from './parametrics-routing.module';
import { TiposhabitacionesComponent } from './components/tiposhabitaciones/tiposhabitaciones.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { ListarHabitacionesComponent } from './components/listar-habitaciones/listar-habitaciones.component';
//Tabla para los tipos de habitación
import { HttpClientModule } from '@angular/common/http';
import { TiposService } from './services/TiposService';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu'
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';

// Usuarios
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms'
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {PasswordModule} from 'primeng/password';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import { ConfirmDialog } from 'primeng/confirmdialog';
//Tabla de Usuarios
import {TableModule} from 'primeng/table';
import { UsuariosService } from './services/usuarios.service';
import {MessageService} from 'primeng/api';
import {KeyFilterModule} from 'primeng/keyfilter';
import { HabitacionService } from './services/habitacion.service';
@NgModule({
  declarations: [
    TiposhabitacionesComponent,
    HabitacionesComponent,
    UsuariosComponent,
    FormularioUsuarioComponent,
    ListarHabitacionesComponent
  ],
  imports: [
    CommonModule,
    ParametricsRoutingModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule, 
    DialogModule,
    ConfirmDialogModule,
    PasswordModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    KeyFilterModule,
    HttpClientModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    ProgressBarModule,
    FileUploadModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    InputTextareaModule,
    ConfirmDialog

  ],
  providers: [
    ConfirmationService,
    UsuariosService,
    MessageService,
    TiposService,
    HabitacionService
  ],

})
export class ParametricsModule { }