import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    HomeComponent,
    HowToHelpComponent,
    PageNotFoundComponent,
    PermissionDeniedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
