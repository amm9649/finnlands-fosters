import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';



@NgModule({
  declarations: [
    HomepageComponent,
    ContactUsComponent,
    HowToHelpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
