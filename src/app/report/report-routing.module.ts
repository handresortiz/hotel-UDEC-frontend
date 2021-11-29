import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarComponent } from './page/listar/listar.component';
import { OcupacionComponent } from './page/ocupacion/ocupacion.component';
import { LimpiezaPComponent} from './page/limpieza-p/limpieza-p.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'ocupacion', component: OcupacionComponent },
      {path: 'listar', component: ListarComponent },
      {path: 'limpieza', component: LimpiezaPComponent },
      {path: '**', redirectTo: 'listar'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  RouterModule],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
