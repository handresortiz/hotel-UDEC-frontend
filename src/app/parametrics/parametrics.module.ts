import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametricsRoutingModule } from './parametrics-routing.module';
import { TiposhabitacionesComponent } from './components/tiposhabitaciones/tiposhabitaciones.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';

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

//Tabla de Usuarios
import {TableModule} from 'primeng/table';
import { UsuariosService } from './services/usuarios.service';
import {MessageService} from 'primeng/api';
import {KeyFilterModule} from 'primeng/keyfilter';

@NgModule({
  declarations: [
    TiposhabitacionesComponent,
    HabitacionesComponent,
    UsuariosComponent,
    FormularioUsuarioComponent,
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
    KeyFilterModule
  ],
  providers: [
    ConfirmationService,
    UsuariosService,
    MessageService
  ],

})
export class ParametricsModule { }
