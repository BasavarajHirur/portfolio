import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTemplateComponent } from './common-template.component';

describe('CommonTemplateComponent', () => {
  let component: CommonTemplateComponent;
  let fixture: ComponentFixture<CommonTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonTemplateComponent]
    });
    fixture = TestBed.createComponent(CommonTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
