import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEntryComponent } from './member-entry.component';

describe('MemberEntryComponent', () => {
  let component: MemberEntryComponent;
  let fixture: ComponentFixture<MemberEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
