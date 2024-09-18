import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillExperienceDetailsComponent } from './skill-experience-details.component';

describe('SkillExperienceDetailsComponent', () => {
  let component: SkillExperienceDetailsComponent;
  let fixture: ComponentFixture<SkillExperienceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillExperienceDetailsComponent]
    });
    fixture = TestBed.createComponent(SkillExperienceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
