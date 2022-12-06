import { Input, Component, OnInit } from '@angular/core';

import { AdoptableCat } from '@app/_models';

@Component({
  selector: 'adoptables-cat-summary',
  templateUrl: './cat-summary.component.html',
  styleUrls: ['./cat-summary.component.css']
})
export class CatSummaryComponent implements OnInit {
  @Input() cat: AdoptableCat;

  constructor() {
  }

  ngOnInit(): void {
  }

}
