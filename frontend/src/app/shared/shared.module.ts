import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { CatCarouselComponent } from './cat-carousel/cat-carousel.component';



@NgModule({
  declarations: [
    CatCarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    CatCarouselComponent,
  ]
})
export class SharedModule { }
