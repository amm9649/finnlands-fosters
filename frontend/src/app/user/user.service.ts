import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class UserService {
  BASE_AUTH_URL = 'dj-rest-auth/';

  constructor(private http: HttpClient) { }

  /** POST: add a new user to the database */
  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.BASE_AUTH_URL+"register", user, httpOptions);
      //.pipe(catchError(this.handleError('registerUser', user)));
  }
}
