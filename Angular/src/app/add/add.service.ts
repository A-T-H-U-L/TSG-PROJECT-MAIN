import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`,
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class AddService {
  constructor(private httpClient: HttpClient) {}

  AddTaxPro(id: any): Observable<any> {
    return this.httpClient.get('/taxpro/add', { observe: 'response' }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }
}
