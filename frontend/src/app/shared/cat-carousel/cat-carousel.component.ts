import { Input, Component, OnInit } from '@angular/core';

import { AdoptService } from '@app/_services';
import { CatPicture } from '@app/_models';

@Component({
  selector: 'cat-carousel',
  templateUrl: './cat-carousel.component.html',
})
export class CatCarouselComponent implements OnInit {
  @Input() pictures: CatPicture[];

  constructor(private adoptService: AdoptService) { }

  ngOnInit(): void { }

}
