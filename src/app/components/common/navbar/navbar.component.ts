import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {User} from '../../../models/user';
import {NotificationService} from '../../../services/notifications/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(
      private auth: AuthenticationService,
      private notificationsService: NotificationService,
      private router: Router
  ) {
    const user = auth.currentUser();
    if (user) {
      this.user = user;
    }
  }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.auth.logout();
    this.notificationsService.success('You have been logged out!');
    this.router.navigate(['/']);
  }
}
