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


@Injectable({
  providedIn: 'root'
})
export class AdoptService {

  constructor(private http: HttpClient) { }

  //create() {}
  listAll() { return this.http.get<any>(`${environment.apiUrl}/api/adopt/cats`); }
  retrieveById(id: string) { return this.http.get<any>(`${environment.apiUrl}/api/adopt/cats/{$id}`); }
  //update(id, params) {}
  destroy(id: string) { return this.http.delete(`${environment.apiUrl}/api/adopt/cats/${id}/remove`); }
}
