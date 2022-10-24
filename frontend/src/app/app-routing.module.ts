import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './core/homepage/homepage.component';
import { HowToHelpComponent } from './core/how-to-help/how-to-help.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'how-to-help', component: HowToHelpComponent },
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
