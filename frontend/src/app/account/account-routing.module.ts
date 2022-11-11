import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app/_helpers';

import { ContractComponent } from './contract/contract.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'contract', component: ContractComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
      { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'register', component: RegisterComponent },
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
      { path: 'reset-password', component: ResetPassComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }