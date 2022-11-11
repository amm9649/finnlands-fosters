import { Component, OnInit } from '@angular/core';

import { AdoptService } from '@app/_services';
import { AdoptableCat } from '@app/_models';

@Component({
  selector: 'adoptables-cat-list',
  templateUrl: './cat-list.component.html',
})
export class CatListComponent implements OnInit {
  cats: AdoptableCat[];

  constructor(private adoptService: AdoptService) { }

  ngOnInit(): void {
    this.adoptService.listAll()
      .subscribe(response => {
        this.cats = response;
      })
  }

}
