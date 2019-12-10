import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'CatalogueWebApp';

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authService.loadToken();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isUser() {
    return this.authService.isUser();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logOut() {
    this.authService.logOut();
  }
}
