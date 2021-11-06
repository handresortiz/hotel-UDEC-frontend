import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesHabitacionComponent } from './components/detalles-habitacion/detalles-habitacion.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'detalle-habitacion', component: DetallesHabitacionComponent},
    {path: 'catalogo', component: CatalogoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
