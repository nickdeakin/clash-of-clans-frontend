import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './pages/landing/landing.component';
import { MemberComponent } from './pages/member/member.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MembersComponent } from './pages/members/members.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MemberEntryComponent } from './pages/member-entry/member-entry.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MemberComponent,
    HeaderComponent,
    FooterComponent,
    MembersComponent,
    PageNotFoundComponent,
    MemberEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
