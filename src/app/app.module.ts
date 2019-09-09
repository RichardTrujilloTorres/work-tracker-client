import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { EntriesComponent } from './entries/entries.component';
import { StoreEntryComponent } from './store-entry/store-entry.component';
import {HttpClientModule} from '@angular/common/http';
import { DummyComponent } from './dummy/dummy.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntriesComponent,
    StoreEntryComponent,
    DummyComponent,
    EditEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
