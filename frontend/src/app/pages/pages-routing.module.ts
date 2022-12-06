import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Finnland\'s Fosters - Home' },
  { path: 'how-to-help', component: HowToHelpComponent, title: 'Finnland\'s Fosters - How to Help' },
  { path: 'contact', component: ContactUsComponent, title: 'Finnland\'s Fosters - Contact Us' },
  { path: 'permission-denied', component: PermissionDeniedComponent, title: 'Finnland\'s Fosters - Permission Denied'},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, title: 'Finnland\'s Fosters - 404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
