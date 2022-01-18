import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniformSampleComponent } from './uniform-sample.component';

describe('UniformSampleComponent', () => {
  let component: UniformSampleComponent;
  let fixture: ComponentFixture<UniformSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniformSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniformSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
