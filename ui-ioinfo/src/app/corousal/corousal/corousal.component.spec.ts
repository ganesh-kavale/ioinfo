import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorousalComponent } from './corousal.component';

describe('CorousalComponent', () => {
  let component: CorousalComponent;
  let fixture: ComponentFixture<CorousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorousalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
