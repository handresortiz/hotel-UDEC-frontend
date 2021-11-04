import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  
    selectedCategory: any = null;

    categories: any[] = [{name: 'C.C', key: 'C'}, {name: 'C.E', key: 'E'}, {name: 'Pasaporte', key: 'P'}];

    registerForm: FormGroup = this.fb.group({
      pri_nombre: ['', Validators.required],
      seg_nombre: ['', Validators.required],
      pri_apellido: ['', Validators.required],
      seg_apellido: ['', Validators.required],
      razon_social: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      identificacion: ['', Validators.required],
      correo: ['', Validators.required], 
      genero: ['', Validators.required],
      pass: [],
      pass2: []
    })

  constructor( private registerService: RegisterService,
               private fb             : FormBuilder,
               private messageService : MessageService) { }

  ngOnInit(): void {
    this.selectedCategory = this.categories[0];
  }
  


  onRegister(){

  }

}
