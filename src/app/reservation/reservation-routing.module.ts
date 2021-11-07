import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ReservarComponent } from './components/reservar/reservar.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      {path: 'catalogo', component: CatalogoComponent},
      {path: 'reserve-ahora', component:ReservarComponent }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
