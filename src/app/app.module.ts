import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RecordComponent } from './components/record/record.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    AddComponent,
    ListComponent,
    AboutComponent,
    AuthComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
