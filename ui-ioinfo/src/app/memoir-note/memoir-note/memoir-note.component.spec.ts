import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoirNoteComponent } from './memoir-note.component';

describe('MemoirNoteComponent', () => {
  let component: MemoirNoteComponent;
  let fixture: ComponentFixture<MemoirNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoirNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoirNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
