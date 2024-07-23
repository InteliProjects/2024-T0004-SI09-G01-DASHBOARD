import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDashGeralComponent } from './graphic-dash-geral.component';

describe('GraphicDashGeralComponent', () => {
  let component: GraphicDashGeralComponent;
  let fixture: ComponentFixture<GraphicDashGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicDashGeralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphicDashGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
