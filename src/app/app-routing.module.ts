import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuard} from './services/http/guards/auth.guard';
import {CommitsComponent} from './pages/commits/commits/commits.component';
import {StoreEntryComponent} from './pages/entries/store-entry/store-entry.component';
import {ShowEntryComponent} from './pages/entries/show-entry/show-entry.component';
import {EntriesComponent} from './pages/entries/entries/entries.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {ProfileComponent} from './pages/user/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'entries',
    component: EntriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'entries/create',
    component: StoreEntryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'entries/:id',
    component: ShowEntryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'commits',
    component: CommitsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'search/:query',
    component: SearchPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
