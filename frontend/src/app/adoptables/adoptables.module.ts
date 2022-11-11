import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptablesRoutingModule } from './adoptables-routing.module';

import { CatCarouselComponent } from './cat-carousel/cat-carousel.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CatItemComponent } from './cat-item/cat-item.component';


@NgModule({
  declarations: [
    CatCarouselComponent,
    CatListComponent,
    CatDetailComponent,
    CatItemComponent
  ],
  imports: [
    CommonModule,
    AdoptablesRoutingModule
  ]
})
export class AdoptablesModule { }
