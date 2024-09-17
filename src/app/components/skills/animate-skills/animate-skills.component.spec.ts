import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateSkillsComponent } from './animate-skills.component';

describe('AnimateSkillsComponent', () => {
  let component: AnimateSkillsComponent;
  let fixture: ComponentFixture<AnimateSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimateSkillsComponent]
    });
    fixture = TestBed.createComponent(AnimateSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
