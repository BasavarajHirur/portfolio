import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyHeaderComponent } from './privacy-header.component';

describe('PrivacyHeaderComponent', () => {
  let component: PrivacyHeaderComponent;
  let fixture: ComponentFixture<PrivacyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyHeaderComponent]
    });
    fixture = TestBed.createComponent(PrivacyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
