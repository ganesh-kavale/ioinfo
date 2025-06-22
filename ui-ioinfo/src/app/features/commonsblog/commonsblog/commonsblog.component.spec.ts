import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsblogComponent } from './commonsblog.component';

describe('CommonsblogComponent', () => {
  let component: CommonsblogComponent;
  let fixture: ComponentFixture<CommonsblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonsblogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonsblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
