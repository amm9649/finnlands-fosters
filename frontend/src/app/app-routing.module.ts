import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adoptablesModule = () => import('./adoptables/adoptables.module').then(x => x.AdoptablesModule);
const eventsModule = () => import('./events/events.module').then(x => x.EventsModule);
const raffleModule = () => import('./raffle/raffle.module').then(x => x.RaffleModule);
const pagesModule = () => import('./pages/pages.module').then(x => x.PagesModule);

const routes: Routes = [
  { path: 'account', loadChildren: accountModule },
  { path: 'adopt', loadChildren: adoptablesModule },
  { path: 'events', loadChildren: eventsModule },
  { path: 'raffle', loadChildren: raffleModule },
  { path: '', loadChildren: pagesModule },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
