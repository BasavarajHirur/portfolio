import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingPoliciesComponent } from './shipping-policies.component';

describe('ShippingPoliciesComponent', () => {
  let component: ShippingPoliciesComponent;
  let fixture: ComponentFixture<ShippingPoliciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingPoliciesComponent]
    });
    fixture = TestBed.createComponent(ShippingPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
