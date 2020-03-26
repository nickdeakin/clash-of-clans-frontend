import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {MemberComponent} from './pages/member/member.component';
import {MembersComponent} from './pages/members/members.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {MemberEntryComponent} from './pages/member-entry/member-entry.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'members', component: MembersComponent},
  {path: 'members/:id', component: MemberComponent},
  {path: 'memberentry', component: MemberEntryComponent},
  {path: 'memberentry/:id', component: MemberEntryComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
