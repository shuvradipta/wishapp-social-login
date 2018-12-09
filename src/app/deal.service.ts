import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Deal } from './deal'
;
@Injectable({
  providedIn: 'root'
})
export class DealService {
  private publicDealsUrl = 'http://localhost:3000/api/deals/public';
  private privateDealsUrl = 'http://localhost:3000/api/deals/private';

  constructor(private http: HttpClient) { }

  getPublicDeals() {
    return this.http.get<Deal[]>(this.publicDealsUrl)
            .pipe(
              catchError(this.handleError)
            );
  }

  getPrivateDeals() {
    return this.http.get<Deal[]>(this.privateDealsUrl)
            .pipe(
              catchError(this.handleError)
            );
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }
  
  purchase(item) {
    alert(`You bought the: ${item.name}`);
  }
}
