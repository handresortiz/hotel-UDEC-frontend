import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitaciones } from '../modelo/habitaciones';
import { ServiceService } from "../service.service";



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  habitaciones: Habitaciones[];

  constructor(private ocupacionService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.ocupacionService.getHabitaciones()
    .subscribe(data => {

      this.habitaciones = data;

    });
  }

  print() {
    window.print();
}

}
