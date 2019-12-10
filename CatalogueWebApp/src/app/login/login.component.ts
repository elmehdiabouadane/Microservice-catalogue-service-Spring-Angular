import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(data) {
    this.authService.login(data)
      .subscribe(resp => {
        const jwt = resp.headers.get('Authorization');
        this.authService.saveToken(jwt);
        this.router.navigateByUrl('/');
      }, error => {
        console.log(error);
      });
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isUser() {
    return this.authService.isUser();
  }
}
