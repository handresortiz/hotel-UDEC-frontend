import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EmailConfirmComponent } from './pages/email-confirm/email-confirm.component';
import { PolitycsComponent } from './pages/politycs/politycs.component';
import { EnviarEmailComponent } from './pages/enviar-email/enviar-email.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'validate', component: EmailConfirmComponent},
      { path: 'policy', component: PolitycsComponent},
      { path: 'verificacion', component: EnviarEmailComponent},
      { path: '**', redirectTo: 'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
