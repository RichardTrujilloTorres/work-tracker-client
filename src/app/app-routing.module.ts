import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntriesComponent} from './entries/entries.component';
import {EditEntryComponent} from './edit-entry/edit-entry.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuard} from './services/http/guards/auth.guard';
import {CommitsComponent} from './pages/commits/commits/commits.component';
import {StoreEntryComponent} from './pages/entries/store-entry/store-entry.component';
import {ShowEntryComponent} from './pages/entries/show-entry/show-entry.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
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
    path: 'entries/:id/edit',
    component: EditEntryComponent,
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
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
