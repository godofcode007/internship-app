import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertBandComponent } from './concert-band.component';

describe('ConcertBandComponent', () => {
  let component: ConcertBandComponent;
  let fixture: ComponentFixture<ConcertBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertBandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcertBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
