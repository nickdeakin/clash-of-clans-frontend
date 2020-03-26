import { Component, OnInit } from '@angular/core';
import {MemberService} from '../../services/member.service';
import {Member} from '../../models/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
    });
  }

  noMembers(): boolean {
    return !this.members || !this.members.length;
  }
}
