import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationNodesComponent } from './navigation-nodes.component';

describe('NavigationNodesComponent', () => {
  let component: NavigationNodesComponent;
  let fixture: ComponentFixture<NavigationNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationNodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
