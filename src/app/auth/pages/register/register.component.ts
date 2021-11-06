import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { MessageService, SelectItem } from 'primeng/api';
import { Profile } from '../../interfaces/profile';
import { Person } from '../../interfaces/person';
import { User } from '../../interfaces/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  

    selectedDrop: SelectItem;

    optionSex: SelectItem[] =[
      {label: 'Masculino', value: { name:'Masculino', value:'M'}},
      {label: 'Femenino', value: { name:'Femenino', value:'F'}}
    ]

    

    registerForm     : FormGroup = this.fb.group({
      pri_nombre     : ['', Validators.required],
      seg_nombre     : [''],
      pri_apellido   : ['', Validators.required],
      seg_apellido   : [''],
      razon_social   : [''],
      telefono       : [''],
      direccion      : ['', Validators.required],
      identificacion : ['', [Validators.required, Validators.minLength(7)]],
      correo         : ['', [Validators.required, Validators.email]], 
      genero         : ['' , Validators.required],
      pass           : ['', [Validators.required, Validators.minLength(6)]],
      pass2          : ['', [Validators.required, Validators.minLength(6)]],
      type           : ['']
    });


    profile: Profile = {
      desc_perfil: 'Perfil de usuario comun',
      nom_perfil: 'User Perfil'
    }

  constructor( private registerService: RegisterService,
               private fb             : FormBuilder,
               private messageService : MessageService) {
                this.registerForm.get('pass2').setValidators(
                  this.equalsValidator( this.registerForm.get('pass') )
                  );
                }

  ngOnInit(): void {
    
  }
  


  onRegister(){

    let person      : Person = {
      pri_nombre    : this.registerForm.controls['pri_nombre'].value,
      seg_nombre    : this.registerForm.controls['seg_nombre'].value,
      pri_apellido  : this.registerForm.controls['pri_apellido'].value,
      seg_apellido  : this.registerForm.controls['seg_apellido'].value,
      razon_social  : this.registerForm.controls['razon_social'].value,
      telefono      : this.registerForm.controls['telefono'].value,
      direccion     : this.registerForm.controls['direccion'].value,
      correo        : this.registerForm.controls['correo'].value,
      identificacion: this.registerForm.controls['identificacion'].value,
      genero        : this.registerForm.controls['genero'].value.value
    }

    let user: User = {
      login: this.registerForm.controls['correo'].value,
      clave: this.registerForm.controls['pass'].value,
    }

    this.registerService.registerProfile(this.profile)
    .subscribe( message => {
        console.log(message);
    },(error => {
      console.log(error.error.mensaje)
    }));
      
    this.registerService.registerPerson( person )
    .subscribe( message => {
      console.log(message);
    },(error => {
      console.log(error.error.mensaje)
    }));

    this.registerService.registerUser( user )
    .subscribe( message => {
      console.log(message);
    },(error => {
      console.log(error.error.mensaje)
    })
    )
  }

  isValid(campo: string) {
    return this.registerForm.controls[campo].errors &&
      this.registerForm.controls[campo].touched;
  }

  //Function for validate two inputs equals
  equalsValidator( otherControl: AbstractControl): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} => {
      let value: any = control.value;
      let otherValue: any = otherControl.value;
      return otherValue === value ? null : { 'Las contraseñas no son iguales': {value, otherValue}};
    };
  }

  public getError(controlName: string): string {
    //console.log(controlName);
    let error = '';
    const control = this.registerForm.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

}
