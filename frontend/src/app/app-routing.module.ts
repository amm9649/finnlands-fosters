import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './core/homepage/homepage.component';
import { HowToHelpComponent } from './core/how-to-help/how-to-help.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent, title: 'Finnland\'s Fosters - Home' },
  { path: 'how-to-help', component: HowToHelpComponent, title: 'Finnland\'s Fosters - How to Help' },
  { path: 'contact', component: ContactUsComponent, title: 'Finnland\'s Fosters - Contact Us' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, title: 'Finnland\'s Fosters - 404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
