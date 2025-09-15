import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAiAnalyserComponent } from './log-ai-analyser.component';

describe('LogAiAnalyserComponent', () => {
  let component: LogAiAnalyserComponent;
  let fixture: ComponentFixture<LogAiAnalyserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogAiAnalyserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogAiAnalyserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
