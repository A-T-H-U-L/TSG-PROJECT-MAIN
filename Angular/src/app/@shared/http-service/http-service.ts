import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class HttpServiceWrapper {
  constructor(private httpClient: HttpClient) {}

  public getRequest(url: string): Observable<any> {
    return this.httpClient.get(url, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }

  public postRequest(url: string, body?: any): Observable<any> {
    return this.httpClient.post<any>(url, body, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }

  public putRequest(url: string, body?: any): Observable<any> {
    return this.httpClient.put(url, body, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }

  public patchRequest(url: string, body?: any): Observable<any> {
    return this.httpClient.patch<any>(url, body, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }


  public makeDeleteRequest(url: string, body?: any): Observable<any> {
    return this.httpClient
      .request<any>("delete", url, {
        body,
        observe: "response"
      })
      .pipe(
        map((res: HttpResponse<any>) => {
          return res.body;
        })
      );
  }
}


// db.promise("SELECT * FROM users WHERE username='john doe' LIMIT 1;")
// .then((result)=>{
//     console.log(result);
//     var sql = "SELECT * FROM friends WHERE username='";
//         sql = result[0];
//         sql = "';"
//     return db.promise(sql);
// }).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });