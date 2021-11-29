import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Habitaciones } from '../modelo/habitaciones';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-limpieza-p',
  templateUrl: './limpieza-p.component.html',
  styleUrls: ['./limpieza-p.component.scss']
})
export class LimpiezaPComponent implements OnInit {

  date: any;
  constructor(private ocupacionService: ServiceService) { }
  habitaciones: Habitaciones[];
  ngOnInit(): void {
    this.date = moment(new Date()).format('D/MM/YY');
    console.log(moment(new Date()).format('D/MMMM/YYYY'));
    this.ocupacionService.getHabitaciones()
    .subscribe(data => {

      this.habitaciones = data;

    });
  }

  print() {
    window.print();
}
}
