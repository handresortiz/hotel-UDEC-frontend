import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {DisplayComponent} from './utilities/display.component';
import {ElevationComponent} from './utilities/elevation.component';
import {FlexboxComponent} from './utilities/flexbox.component';
import {GridComponent} from './utilities/grid.component';
import {IconsComponent} from './utilities/icons.component';
import {WidgetsComponent} from './utilities/widgets.component';
import {SpacingComponent} from './utilities/spacing.component';
import {TypographyComponent} from './utilities/typography.component';
import {TextComponent} from './utilities/text.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppInvoiceComponent} from './pages/app.invoice.component';
import {AppHelpComponent} from './pages/app.help.component';
import { MainComponent } from './dashboard/pages/main/main.component';
// Componentes de consumo
import { InventarioComponent } from './consumption/pages/inventario/inventario.component';
import { ProductosComponent } from './consumption/pages/productos/productos.component';
import { NuevoProductoComponent } from './consumption/pages/inventario/nuevo-producto.component';

//componentes ocupacion
import { DetalleHabitacionComponent } from "./ocupation/detalle-habitacion/detalle-habitacion.component";
import { HabitacionEditStatusComponent } from "./ocupation/habitacion-edit-status/habitacion-edit-status.component";
import {HabitacionesComponent  } from "./ocupation/habitaciones/habitaciones.component";
import { ReservasComponent } from "./ocupation/reservas/reservas.component";
import { ReservasClienteComponent } from "./ocupation/reservas-cliente/reservas-cliente.component";
import { EnviarEmailComponent } from './auth/pages/enviar-email/enviar-email.component';
import { EstadiaComponent } from './ocupation/estadia/estadia.component';
const routes: Routes = [

    {
        path: '', component: AppMainComponent,
        children: [
            {path: '', component: DashboardDemoComponent},
            {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
            {path: 'uikit/input', component: InputDemoComponent},
            {path: 'uikit/button', component: ButtonDemoComponent},
            {path: 'uikit/table', component: TableDemoComponent},
            {path: 'uikit/list', component: ListDemoComponent},
            {path: 'uikit/tree', component: TreeDemoComponent},
            {path: 'uikit/panel', component: PanelsDemoComponent},
            {path: 'uikit/overlay', component: OverlaysDemoComponent},
            {path: 'uikit/media', component: MediaDemoComponent},
            {path: 'uikit/menu', component: MenusDemoComponent},
            {path: 'uikit/message', component: MessagesDemoComponent},
            {path: 'uikit/misc', component: MiscDemoComponent},
            {path: 'uikit/charts', component: ChartsDemoComponent},
            {path: 'uikit/file', component: FileDemoComponent},
            {path: 'utilities/display', component: DisplayComponent},
            {path: 'utilities/elevation', component: ElevationComponent},
            {path: 'utilities/flexbox', component: FlexboxComponent},
            {path: 'utilities/grid', component: GridComponent},
            {path: 'utilities/icons', component: IconsComponent},
            {path: 'utilities/widgets', component: WidgetsComponent},
            {path: 'utilities/spacing', component: SpacingComponent},
            {path: 'utilities/typography', component: TypographyComponent},
            {path: 'utilities/text', component: TextComponent},
            {path: 'pages/crud', component: AppCrudComponent},
            {path: 'pages/calendar', component: AppCalendarComponent},
            {path: 'pages/invoice', component: AppInvoiceComponent},
            {path: 'pages/help', component: AppHelpComponent},
            {path: 'pages/empty', component: EmptyDemoComponent},
            {path: 'documentation', component: DocumentationComponent},
            {path: 'parametricas', loadChildren: () => import('./parametrics/parametrics.module').then( module => module.ParametricsModule)},
            {path: 'inventario', component: InventarioComponent},
            {path: 'productos', component: ProductosComponent},
            {path:'habitaciones',component: HabitacionesComponent},
            {path:'habitacion/:id',component: HabitacionEditStatusComponent},
            {path:'reservas',component: ReservasComponent},
            {path:'reservas/:idCedula',component: ReservasClienteComponent},
            {path:'habitacion/detalle/:id',component: DetalleHabitacionComponent},
            {path: 'nuevo', component: NuevoProductoComponent},
            {path:'estadia',component: EstadiaComponent}
            
        ]
    },
    {path: 'error', component: AppErrorComponent},
    {path: 'access', component: AppAccessdeniedComponent},
    {path: 'notfound', component: AppNotfoundComponent},
    {path: 'login', component: AppLoginComponent},
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule)},
    {path: 'dash', loadChildren: () => import('./dashboard/dashboard.module').then( module => module.DashboardModule)},
    {path: 'reservation', loadChildren: () => import('./reservation/reservation.module').then( module => module.ReservationModule)},
    {path: 'ocupation', loadChildren: () => import('./ocupation/ocupation.module').then( module => module.OcupationModule)},
    {path: 'bill', loadChildren: () => import('./bill/bill.module').then( module => module.BillModule)},
    {path: 'report', loadChildren: () => import('./report/report.module').then( module => module.ReportModule)}, 
    { path: 'verificacion', component: EnviarEmailComponent},
    {path: '**', redirectTo: '/notfound'},
]







@NgModule({
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
