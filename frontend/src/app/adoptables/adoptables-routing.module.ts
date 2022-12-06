import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app/_helpers';

import { CatListComponent } from './cat-list/cat-list.component';
import { AdoptAddComponent } from './adopt-add/adopt-add.component';
import { CatAddComponent } from './cat-add/cat-add.component';
import { PictureAddComponent } from './picture-add/picture-add.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CatListComponent },
    ]
  },
  {
    path: 'add',
    children: [
      { path: '', component: AdoptAddComponent },
      { path: 'cat', component: CatAddComponent },
      { path: 'picture', component: PictureAddComponent },
    ],
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdoptablesRoutingModule { }
