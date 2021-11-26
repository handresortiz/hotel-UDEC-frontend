import {Component, OnInit} from '@angular/core';
import {EventService} from '../service/eventservice';
import {Product} from '../domain/product';
import {ProductService} from '../service/productservice';
import {SelectItem, MenuItem} from 'primeng/api';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ChartsServiceService } from '../../dashboard/services/charts-service.service';
import { LoginService } from '../../auth/services/login.service';
import { Response } from '../../auth/interfaces/response';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardDemoComponent implements OnInit {

    user: Response = {
        login: '',
        pri_nombre: '',

    };

    data: any = [];

    pieData: any;

    lineData: any; 
    
    cities: SelectItem[];

    products: Product[];

    chartData: any;

    events: any[];

    selectedCity: any;

    items: MenuItem[];

    fullcalendarOptions: any;

    constructor(private productService: ProductService, 
                private eventService: EventService,
                private chartService: ChartsServiceService,
                private loginService: LoginService) { }

    ngOnInit() {

        if(localStorage.getItem('login') != null){
            this.loginService.getCredentials()
            .subscribe( resp =>{                
                this.user.login = resp.login;
            });
        }

          this.chartService.chartReservation()
          .subscribe( data => {
            this.chartService.chartBuys()
            .subscribe( buys => {
                this.chartService.chartServices()
                .subscribe( service => {

                    this.lineData = {
                        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                        datasets: [
                            {
                                label: 'Reservas',
                                data: data,
                                fill: false,
                                backgroundColor: 'rgb(250, 53, 55)',
                                borderColor: 'rgb(250, 53, 55)'
                            },
                            {
                                label: 'Ventas',
                                data: buys,
                                fill: false,
                                backgroundColor: 'rgb(53, 154, 55)',
                                borderColor: 'rgb(53, 154, 55)'
                            },
                            {
                                label: 'Servicios',
                                data: service,
                                fill: false,
                                backgroundColor: 'rgb(236, 171, 7)',
                                borderColor: 'rgb(236, 171, 7)'
                            }
                        ]
                    };
                });
            })  
          });

          this.chartService.allDisponible()
          .subscribe( disponible => {
               this.chartService.allOcupation()
               .subscribe( ocupation => {

                this.chartService.allClean()
                .subscribe( clean =>{

                    this.chartService.allManteinance()
                    .subscribe( mantenaince =>{

                        this.pieData = {
                            labels: ['Disponible', 'Ocupadas', 'Limpieza', 'Mantenimiento'],
                            datasets: [
                                {
                                    data: [disponible,ocupation, clean, mantenaince],
                                    backgroundColor: [
                                        'rgb(54, 162, 235)',
                                        'rgb(255, 99, 132)',
                                        'rgb(255, 205, 86)',
                                        'rgb(75, 192, 192)'
                                    ]
                                }]
                        };

                    })
                })

               })
          })


        
        this.productService.getProducts().then(data => this.products = data);

        this.eventService.getEvents().then(events => {this.events = events; });

        this.cities = [];
        this.cities.push({label: 'Select City', value: null});
        this.cities.push({label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}});
        this.cities.push({label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}});
        this.cities.push({label: 'London', value: {id: 3, name: 'London', code: 'LDN'}});
        this.cities.push({label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}});
        this.cities.push({label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}});

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#FFC107'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#03A9F4'
                }
            ]
        };

        this.items = [
            {label: 'New', icon: 'pi pi-plus'},
            {label: 'Open', icon: 'pi pi-power-off'}
        ];

        this.fullcalendarOptions = {
            plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
            defaultDate: '2021-10-30',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }
        };

    }


    
}
