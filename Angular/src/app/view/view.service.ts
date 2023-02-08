import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
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
export class ViewService {
  constructor(private httpClient: HttpClient) {}

  viewTaxPro(id:number){


    return this.httpClient.get('/taxpro/view/'+id, { observe: "response" }).pipe(
        map((res: HttpResponse<any>) => {
          return res.body;
        })
      );



  }


}
