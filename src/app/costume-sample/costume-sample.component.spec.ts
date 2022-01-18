import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeSampleComponent } from './costume-sample.component';

describe('CostumeSampleComponent', () => {
  let component: CostumeSampleComponent;
  let fixture: ComponentFixture<CostumeSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumeSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
