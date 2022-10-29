import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {PasswordModule} from 'primeng/password';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    LogoutComponent,
    UserDetailComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    PasswordModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
