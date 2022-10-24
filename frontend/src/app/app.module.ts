import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HomepageComponent } from './core/homepage/homepage.component';
import { HowToHelpComponent } from './core/how-to-help/how-to-help.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HowToHelpComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
