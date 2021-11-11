import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { EmailConfirmComponent } from './pages/email-confirm/email-confirm.component';
import { PrimengModule } from '../primeng/primeng.module';
import { CapchaComponent } from './components/capcha/capcha.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, EmailConfirmComponent, CapchaComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
