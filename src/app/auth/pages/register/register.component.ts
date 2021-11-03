import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
    selectedCategory: any = null;

    categories: any[] = [{name: 'C.C', key: 'C'}, {name: 'C.E', key: 'E'}, {name: 'Pasaporte', key: 'P'}];

  constructor() { }

  ngOnInit(): void {
    this.selectedCategory = this.categories[0];
  }
  

}
