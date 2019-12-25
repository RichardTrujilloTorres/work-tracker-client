import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/http/user/user.service';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {Profile, ProfileResponseData} from '../../../../common/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profile: Profile;

  constructor(
      private auth: AuthenticationService,
      private userService: UserService
  ) { }

  ngOnInit() {
      this.userService.getProfile(this.auth.currentUser().username)
          .subscribe((data: ProfileResponseData) => {
              console.log(data.data.profile);
              this.profile = data.data.profile;
          });
  }
}
