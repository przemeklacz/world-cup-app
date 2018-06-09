import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { User } from "@firebase/auth-types";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  currentUser$: Observable<User>;
  currentUserEmail$: Observable<String>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.currentUser$ = this.authService.currentUser$;
  }

  login() {
    this.authService.signInWithGoogle();
  }

  logout() {
    this.authService.logout();
    this.router.navigate([`/login`]);
  }

}
