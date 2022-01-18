import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeOrderComponent } from './costume-order.component';

describe('CostumeOrderComponentComponent', () => {
  let component: CostumeOrderComponent;
  let fixture: ComponentFixture<CostumeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumeOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
