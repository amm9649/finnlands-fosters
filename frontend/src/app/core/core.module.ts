import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './homepage/homepage.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    HomepageComponent,
    HowToHelpComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
