import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of,map} from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';

export interface LoginContext {
  email: string;
  password: string;
  // remember?: boolean;
}

export interface RegiterContext {
  name: string;
  email:string;
  password: string;
  // remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService,private http:HttpClient) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */

  login(requestObj: LoginContext): Observable<any> {
    return this.http.post('/auth/login', requestObj, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }


  register(requestObj: RegiterContext): Observable<any> {
    return this.http.post('/auth/register', requestObj, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.clearCredentila();
    return of(true);
  }
}
