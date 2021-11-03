import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { EmailConfirmComponent } from './pages/email-confirm/email-confirm.component';
import { PrimengModule } from '../primeng/primeng.module';
import { CapchaComponent } from './components/capcha/capcha.component';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, EmailConfirmComponent, CapchaComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule
  ]
})
export class AuthModule { }
