import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { MessageService, SelectItem } from 'primeng/api';
import { MailService } from '../../services/mail.service';
import { SignupRequest } from '../../interfaces/signup-request';
import { Email } from '../../interfaces/email';



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


  constructor( private registerService: RegisterService,
               private fb             : FormBuilder,
               private messageService : MessageService,
               private mailService    : MailService) {
                this.registerForm.get('pass2').setValidators(
                  this.equalsValidator( this.registerForm.get('pass') )
                  );
                }

  ngOnInit(): void {
    
  }
  


  onRegister(){

    let person      : SignupRequest = {
      pri_nombre    : this.registerForm.controls['pri_nombre'].value,
      seg_nombre    : this.registerForm.controls['seg_nombre'].value,
      pri_apellido  : this.registerForm.controls['pri_apellido'].value,
      seg_apellido  : this.registerForm.controls['seg_apellido'].value,
      razon_social  : this.registerForm.controls['razon_social'].value,
      telefono      : this.registerForm.controls['telefono'].value,
      direccion     : this.registerForm.controls['direccion'].value,
      login         : this.registerForm.controls['correo'].value,
      clave         : this.registerForm.controls['correo'].value,
      identificacion: this.registerForm.controls['identificacion'].value,
      genero        : this.registerForm.controls['genero'].value.value
    }
  
      

          this.registerService.registerUser( person )
          .subscribe( message => {

            let mail: Email = {
              email: this.registerForm.controls['correo'].value,
              name:  this.registerForm.controls['pri_nombre'].value
            }

            this.mailService.sendEmail(mail)
            .subscribe( message =>{
              this.showSuccessViaToast('Verificacion enviada correctamente')
            },( error => {
            this.showErrorViaToast(error.error.message);
            }) );       

            this.showSuccessViaToast(message.message)
          },(error => {
            this.showErrorViaToast(error.error.menssage);
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

  showErrorViaToast(message: string) {
    this.messageService.add({ key: 'tst', severity: 'error', summary: message, detail: message });
  }

  showSuccessViaToast(message: string) {
    this.messageService.add({ key: 'tst', severity: 'success', summary: 'Usuario logeado', detail: message  });
  }

}
