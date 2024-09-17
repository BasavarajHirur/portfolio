import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySkillsComponent } from './secondary-skills.component';

describe('SecondarySkillsComponent', () => {
  let component: SecondarySkillsComponent;
  let fixture: ComponentFixture<SecondarySkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondarySkillsComponent]
    });
    fixture = TestBed.createComponent(SecondarySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
