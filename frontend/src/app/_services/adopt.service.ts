import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment'
/*
import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';
*/

import { AdoptableCat, CatPicture } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class AdoptService {

  constructor(private http: HttpClient) { }

  //create() {}
  listAllCats() { return this.http.get<any>(`${environment.apiUrl}/api/adopt/cats`); }0
  retrieveCatById(id: string) { return this.http.get<any>(`${environment.apiUrl}/api/adopt/cats/${id}`); }
  //update(id, params) {}
  removeCat(id: string) { return this.http.delete(`${environment.apiUrl}/api/adopt/cats/${id}/remove`); }

  retrievePictureByUrl(picurl: string) { return this.http.get<any>(picurl)}
  listPicturesByCat(id: string) { return this.http.get<any>(`${environment.apiUrl}/api/adopt/cats/${id}/pictures`)}
  listAllPictures() { return this.http.get<any>(`${environment.apiUrl}/api/adopt/pictures`)}
}
