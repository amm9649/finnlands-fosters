import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'user', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserRoutingModule { }
