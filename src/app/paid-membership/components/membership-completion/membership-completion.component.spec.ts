import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipCompletionComponent } from './membership-completion.component';

describe('MembershipCompletionComponent', () => {
  let component: MembershipCompletionComponent;
  let fixture: ComponentFixture<MembershipCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
