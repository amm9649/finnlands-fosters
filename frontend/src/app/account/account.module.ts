import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ContractComponent } from './contract/contract.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LogoutComponent,
    ContractComponent,
    MessagesComponent,
    SettingsComponent,
    ResetPassComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
  ],
})
export class AccountModule { }
