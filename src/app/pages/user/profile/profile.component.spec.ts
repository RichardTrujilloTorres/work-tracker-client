import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {Profile, ProfileResponseData} from '../../../../common/types';
import {AuthenticationService} from '../../../services/authentication/authentication.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  const profile: Profile = {
    firstname: 'Richard',
    lastname: 'Trujillo'
  };
  const profileResponseData: ProfileResponseData = {
    data: {
      profile
    }
  };

  const authenticationServiceStub = {
    currentUser: () => {
      return { username: 'test@test.com' };
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [
        HttpClientTestingModule,
      ],
        providers: [
          {
            provide: AuthenticationService,
            useValue: authenticationServiceStub
          }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getProfile']);

    userServiceSpy.getProfile.and.returnValue(of(profileResponseData));

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // expect(userServiceSpy.getProfile.calls.count()).toBe(1, 'called once');
    // expect((component as any).profile).toEqual(profile);
  });
});
