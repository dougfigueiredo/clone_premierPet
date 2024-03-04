import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayInComponent } from './stay-in.component';

describe('StayInComponent', () => {
  let component: StayInComponent;
  let fixture: ComponentFixture<StayInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StayInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
