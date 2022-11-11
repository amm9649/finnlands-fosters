import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor() { }

  //create() {}
  listAll() { return this.http.get<CatPicture[]>(`${environment.apiUrl}/api/adopt/pictures`); }
  //listByCat(finnId: string) {}
  retrieveById(id: string) { return this.http.get<CatPicture[]>(`${environment.apiUrl}/api/adopt/pictures/{$id}`); }
  //update(id, params) {}
  destroy(id: string) { return this.http.delete(`${environment.apiUrl}/api/adopt/pictures/${id}`); }
}
