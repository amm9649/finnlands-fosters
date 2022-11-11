import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './core/homepage/homepage.component';
import { HowToHelpComponent } from './core/how-to-help/how-to-help.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adoptablesModule = () => import('./adoptables/adoptables.module').then(x => x.AdoptablesModule);
const eventsModule = () => import('./events/events.module').then(x => x.EventsModule);
const raffleModule = () => import('./raffle/raffle.module').then(x => x.RaffleModule);

const routes: Routes = [
  { path: 'home', component: HomepageComponent, title: 'Finnland\'s Fosters - Home' },
  { path: 'how-to-help', component: HowToHelpComponent, title: 'Finnland\'s Fosters - How to Help' },
  { path: 'contact', component: ContactUsComponent, title: 'Finnland\'s Fosters - Contact Us' },
  { path: 'adopt', loadChildren: adoptablesModule },
  { path: '', loadChildren: accountModule },
  { path: '', loadChildren: eventsModule },
  { path: '', loadChildren: raffleModule },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, title: 'Finnland\'s Fosters - 404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
