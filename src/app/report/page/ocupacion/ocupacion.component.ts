import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-ocupacion',
  templateUrl: './ocupacion.component.html',
  styleUrls: ['./ocupacion.component.scss']
})
export class OcupacionComponent implements OnInit {

date: any;
  constructor() { }

  ngOnInit(): void {
    this.date = moment(new Date()).format('D/MM/YY');
    console.log(moment(new Date()).format('D/MMMM/YYYY'));
  }
  print() {
    window.print();
}

}
