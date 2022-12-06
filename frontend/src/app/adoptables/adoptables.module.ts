import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { AdoptablesRoutingModule } from './adoptables-routing.module';

import { CatListComponent } from './cat-list/cat-list.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CatSummaryComponent } from './cat-summary/cat-summary.component';
import { CatAddComponent } from './cat-add/cat-add.component';
import { PictureAddComponent } from './picture-add/picture-add.component';
import { AdoptAddComponent } from './adopt-add/adopt-add.component';


@NgModule({
  declarations: [
    CatListComponent,
    CatDetailComponent,
    CatSummaryComponent,
    CatAddComponent,
    PictureAddComponent,
    AdoptAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdoptablesRoutingModule
  ]
})
export class AdoptablesModule { }
