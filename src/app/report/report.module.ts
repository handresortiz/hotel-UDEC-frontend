import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { OcupacionComponent } from './page/ocupacion/ocupacion.component';


@NgModule({
  declarations: [OcupacionComponent],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
