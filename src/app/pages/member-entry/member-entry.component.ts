import { Component, OnInit } from '@angular/core';
import {Member} from '../../models/member';
import {ActivatedRoute} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-member-entry',
  templateUrl: './member-entry.component.html',
  styleUrls: ['./member-entry.component.scss']
})
export class MemberEntryComponent implements OnInit {

  member: Member;
  id: string;
  memberForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private memberService: MemberService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.getIdFromUrl();
    if (this.id) {
      this.getMember();
    }

    this.memberForm = this.formBuilder.group({
      name: ''
    });
  }

  isUpdating(): boolean {
    return !!this.member;
  }

  getIdFromUrl(): string {
    return this.route.snapshot.paramMap.get('id');
  }

  getMember() {
    this.memberService.getMember(this.id).subscribe(member => {
      this.member = member;
    });
  }

  onSubmit(memberData) {
    const callback = ((member: Member) => {
      if (member) {
        this.member = member;
        console.log(`${member.name} added successfully`);
        this.memberForm.reset();
      } else {
        console.log(`Failed to add member`);
      }
    });

    if (this.member) {
      this.memberService.putMember(this.member.id, memberData).subscribe(member => {
        callback(member);
      });
    } else {
      this.memberService.postMember(memberData).subscribe(member => {
        callback(member);
      });
    }
  }

}
