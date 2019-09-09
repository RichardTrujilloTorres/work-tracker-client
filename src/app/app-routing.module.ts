import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EntriesComponent} from './entries/entries.component';
import {StoreEntryComponent} from './store-entry/store-entry.component';
import {EditEntryComponent} from './edit-entry/edit-entry.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'entries',
    component: EntriesComponent,
  },
  {
    path: 'entries/create',
    component: StoreEntryComponent,
  },
  {
    path: 'entries/:id/edit',
    component: EditEntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
