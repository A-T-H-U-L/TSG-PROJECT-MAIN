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
export class TaxProService {
  constructor(private httpClient: HttpClient) {}

  // getTaxProList1(): Observable<string> {
  //   return this.httpClient.get(routes.quote()).pipe(
  //     map((body: any) => body.value),
  //     catchError(() => of('Error, could not load joke :-('))
  //   );
  // }

  getTaxProList(): Observable<any> {

    return this.httpClient.get('/taxpro/list', { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }
viewTaxPro(id:any): Observable<any>{

  return this.httpClient.get('/taxpro/view/'+id, { observe: "response" }).pipe(
    map((res: HttpResponse<any>) => {
      return res.body;
    })
  );
}

}
