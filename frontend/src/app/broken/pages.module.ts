import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { HomepageComponent } from './homepage/homepage.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';

@NgModule({
  declarations: [
    HomepageComponent,
    HowToHelpComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    PermissionDeniedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PagesModule { }
