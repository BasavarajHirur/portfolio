import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSkillsComponent } from './other-skills.component';

describe('OtherSkillsComponent', () => {
  let component: OtherSkillsComponent;
  let fixture: ComponentFixture<OtherSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherSkillsComponent]
    });
    fixture = TestBed.createComponent(OtherSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
