import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




import { AuthenticationService, CredentialsService } from '@app/auth';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {}

  ngOnInit() {
    
}

  // toggleMenu() {
  //   this.menuHidden = !this.menuHidden;
  // }

  // logout() {
  //   this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  // }

  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.clearCredentila();
    this.router.navigate(['/login'])
    return of(true);
  }

}
