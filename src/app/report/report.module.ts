import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportRoutingModule } from './report-routing.module';
import { OcupacionComponent } from './page/ocupacion/ocupacion.component';
import { ListarComponent } from './page/listar/listar.component';
import { SharedModule } from 'primeng/api';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceService } from './page/service.service';
import { LimpiezaPComponent } from './page/limpieza-p/limpieza-p.component';


@NgModule({
  declarations: [OcupacionComponent, ListarComponent, LimpiezaPComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportRoutingModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [ServiceService]
})
export class ReportModule { }
