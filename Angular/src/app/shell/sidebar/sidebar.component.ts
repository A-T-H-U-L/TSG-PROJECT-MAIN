import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




import { AuthenticationService, CredentialsService } from '@app/auth';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
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

}
