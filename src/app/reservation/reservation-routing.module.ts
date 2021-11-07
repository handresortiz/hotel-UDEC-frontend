import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesHabitacionComponent } from './components/detalles-habitacion/detalles-habitacion.component';
<<<<<<< Updated upstream
import { CatalogoComponent } from './components/catalogo/catalogo.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'detalle-habitacion', component: DetallesHabitacionComponent},
    {path: 'catalogo', component: CatalogoComponent}
=======
import { ReservarComponent } from './components/reservar/reservar.component';
const routes: Routes = [
  {path: '', children: [
    {path: 'detalle-habitacion', component: DetallesHabitacionComponent},
    {path: 'reserve-ahora', component:ReservarComponent }
>>>>>>> Stashed changes
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
