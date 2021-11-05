import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturaComponent } from "./pages/factura/factura.component";
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'factura', component: FacturaComponent },
      {path: 'search', component: SearchComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
