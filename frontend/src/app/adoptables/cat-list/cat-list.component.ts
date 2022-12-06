import { Component, OnInit } from '@angular/core';

import { AdoptService } from '@app/_services';
import { AdoptableCat, CatPicture } from '@app/_models';

@Component({
  selector: 'adoptables-cat-list',
  templateUrl: './cat-list.component.html',
})
export class CatListComponent implements OnInit {
  cats: AdoptableCat[] = [];

  constructor(private adoptService: AdoptService) { }

  ngOnInit(): void {
    this.adoptService.listAllCats()
      .subscribe(response => {
        for (var i = 0; i < response.length; i++){
          var pics = [];
          if (response[i]["pictures"]){
            for (var p = 0; p < response[i]["pictures"].length; p++){
              this.adoptService.retrievePictureByUrl(response[i]["pictures"][p])
              .subscribe( res => {
                let pic = <CatPicture>JSON.parse(JSON.stringify(res));
                pics.push(pic);
              });
            }
          }
          let cat = <AdoptableCat>JSON.parse(JSON.stringify(response[i]));
          cat.pictures = pics;
          this.cats.push(cat);
        }
      });
  }
}
