import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcoBenefitsComponent } from './costco-benefits.component';

describe('CostcoBenefitsComponent', () => {
  let component: CostcoBenefitsComponent;
  let fixture: ComponentFixture<CostcoBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostcoBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostcoBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
