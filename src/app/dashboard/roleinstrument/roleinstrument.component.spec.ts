import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleinstrumentComponent } from './roleinstrument.component';

describe('RoleinstrumentComponent', () => {
  let component: RoleinstrumentComponent;
  let fixture: ComponentFixture<RoleinstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleinstrumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleinstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
