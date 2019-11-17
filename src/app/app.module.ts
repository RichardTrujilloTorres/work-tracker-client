import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { EntriesComponent } from './entries/entries.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {PipesModule} from './pipes/pipes.module';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ErrorInterceptor} from './services/http/interceptors/error.interceptor';
import { LoginComponent } from './pages/login/login.component';
import {JwtInterceptor} from './services/http/interceptors/jwt.interceptor';
import {CommitsComponent} from './pages/commits/commits/commits.component';
import { EntryCommitComponent } from './components/entry-commit/entry-commit.component';
import { EntryCommitModalComponent } from './components/entry-commit-modal/entry-commit-modal.component';
import { LoaderComponent } from './components/common/loader/loader.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {StoreEntryComponent} from './pages/entries/store-entry/store-entry.component';
import {ShowEntryComponent} from './pages/entries/show-entry/show-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntriesComponent,
    StoreEntryComponent,
    NavbarComponent,
    DashboardPageComponent,
    ShowEntryComponent,
    LoginComponent,
    CommitsComponent,
    EntryCommitComponent,
    EntryCommitModalComponent,
    LoaderComponent,
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
    InfiniteScrollModule,
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
