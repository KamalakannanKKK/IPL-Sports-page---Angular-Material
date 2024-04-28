import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIComponent } from './mi.component';

describe('MIComponent', () => {
  let component: MIComponent;
  let fixture: ComponentFixture<MIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
