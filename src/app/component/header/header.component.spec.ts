import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentMenu } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponentMenu;
  let fixture: ComponentFixture<HeaderComponentMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponentMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponentMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
