import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { EntriesComponent } from './entries/entries.component';
import { StoreEntryComponent } from './store-entry/store-entry.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {PipesModule} from './pipes/pipes.module';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShowEntryComponent} from './components/show-entry/show-entry.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ErrorInterceptor} from './services/http/interceptors/error.interceptor';
import { LoginComponent } from './pages/login/login.component';
import {JwtInterceptor} from './services/http/interceptors/jwt.interceptor';
import {CommitsComponent} from './pages/commits/commits/commits.component';
import { EntryCommitsComponent } from './pages/entries/entry-commits/entry-commits.component';
import { EntryCommitComponent } from './components/entry-commit/entry-commit.component';
import { EntryCommitModalComponent } from './components/entry-commit-modal/entry-commit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntriesComponent,
    StoreEntryComponent,
    EditEntryComponent,
    NavbarComponent,
    DashboardPageComponent,
    ShowEntryComponent,
    LoginComponent,
    CommitsComponent,
    EntryCommitsComponent,
    EntryCommitComponent,
    EntryCommitModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PipesModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circle
    }),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
      FormsModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
