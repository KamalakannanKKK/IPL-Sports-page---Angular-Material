import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisquadComponent } from './misquad.component';

describe('MisquadComponent', () => {
  let component: MisquadComponent;
  let fixture: ComponentFixture<MisquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisquadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
