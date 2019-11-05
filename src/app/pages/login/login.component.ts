import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {first} from 'rxjs/operators';
import {NotificationService} from '../../services/notifications/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  redirectUrl: string;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private auth: AuthenticationService,
      private notificationsService: NotificationService
  ) {
      if (this.auth.currentUser()) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    });

    this.redirectUrl = this.route.snapshot.queryParams.redirect || '/';
  }

  onSubmit() {
    this.auth.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
        .pipe(first())
        .subscribe(data => {
          this.notificationsService.success('You\'re logged in!');
          this.router.navigate([this.redirectUrl]);
        }, err => {
          this.notificationsService.error(err);
        });
  }
}
