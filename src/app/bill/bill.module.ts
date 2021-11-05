import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { FacturaComponent } from './pages/factura/factura.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [FacturaComponent, SearchComponent],
  imports: [
    CommonModule,
    BillRoutingModule
  ]
})
export class BillModule { }
