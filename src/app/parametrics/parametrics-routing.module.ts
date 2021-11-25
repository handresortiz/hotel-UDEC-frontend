import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiposhabitacionesComponent } from './components/tiposhabitaciones/tiposhabitaciones.component';

import { UsuariosComponent } from './components/usuarios/usuarios.component'
import { ListarHabitacionesComponent } from './components/listar-habitaciones/listar-habitaciones.component'
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'tipos-habitaciones', component: TiposhabitacionesComponent },
      { path: 'habitaciones', component: ListarHabitacionesComponent },
      { path: 'usuarios', component: UsuariosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametricsRoutingModule { }
