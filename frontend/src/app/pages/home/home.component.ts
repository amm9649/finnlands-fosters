import { Component, OnInit } from '@angular/core';

import { CatPicture } from '@app/_models';
import { AdoptService } from '@app/_services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
