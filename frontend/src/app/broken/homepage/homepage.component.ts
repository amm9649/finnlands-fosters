import { Component, OnInit } from '@angular/core';

import { CatPicture } from '@app/_models';
import { AdoptService } from '@app/_services';

@Component({
  selector: 'core-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pictures: CatPicture[] = [];
  
  constructor(private adoptService: AdoptService) { }

  ngOnInit(): void {
    this.adoptService.listAllPictures()
    .subscribe(response => {
      for (var i = 0; i < response.length; i++){
        let picture = <CatPicture>JSON.parse(JSON.stringify(response[i]));
        this.pictures.push(picture);
      }
    });
  }
}
