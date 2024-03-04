import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStayComponent } from './card-stay.component';

describe('CardStayComponent', () => {
  let component: CardStayComponent;
  let fixture: ComponentFixture<CardStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
