import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { LoginService } from '../../services/login.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    login: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required]]
  });

  valid: Boolean = false;

  constructor(private loginService: LoginService,
              private fb: FormBuilder,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onAuthorizate() {
    let logUser: User = {
      login: this.loginForm.controls['login'].value,
      clave: this.loginForm.controls['pass'].value
    }
    this.loginService.Authentication(logUser)
      .subscribe(user => {
        this.showSuccessViaToast(user.mensaje);
        this.navegate();
      }, (err => {
        this.showErrorViaToast(err.error.mensaje);
      }));
  }

  showSuccessViaToast(message: string) {
    this.messageService.add({ key: 'tst', severity: 'success', summary: 'Usuario logeado', detail: message  });
  }

  showErrorViaToast(message: string) {
    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Usuario no encontrado', detail: message });
  }

  isValid(campo: string) {
    return this.loginForm.controls[campo].errors &&
      this.loginForm.controls[campo].touched;
  }

  navegate(){
    this.router.navigate(['/']);
  }

}
