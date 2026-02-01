import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsConnectComponent } from './lets-connect.component';

describe('LetsConnectComponent', () => {
  let component: LetsConnectComponent;
  let fixture: ComponentFixture<LetsConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LetsConnectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetsConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
