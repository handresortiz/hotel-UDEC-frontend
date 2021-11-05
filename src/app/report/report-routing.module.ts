import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OcupacionComponent } from './page/ocupacion/ocupacion.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'ocupacion', component: OcupacionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
