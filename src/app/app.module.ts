import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { EntriesComponent } from './entries/entries.component';
import { StoreEntryComponent } from './store-entry/store-entry.component';
import {HttpClientModule} from '@angular/common/http';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {PipesModule} from './pipes/pipes.module';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntriesComponent,
    StoreEntryComponent,
    EditEntryComponent,
    NavbarComponent,
    DashboardPageComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
