import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HomepageComponent,
    ContactUsComponent,
    HowToHelpComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomepageComponent,
    ContactUsComponent,
    HowToHelpComponent
  ]
})
export class CoreModule { }
