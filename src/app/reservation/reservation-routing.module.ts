import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetallesHabitacionComponent } from './components/detalles-habitacion/detalles-habitacion.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { ResumenReservaComponent } from './components/resumen-reserva/resumen-reserva.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'catalogo', component: CatalogoComponent},
      { path: 'detalles-habitacion', component: DetallesHabitacionComponent },
      { path: 'reserve-ahora', component:ReservarComponent },
      { path: 'resumen-reserva', component:ResumenReservaComponent }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
