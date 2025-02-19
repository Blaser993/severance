import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacrodatarefinementComponent } from './macrodatarefinement.component';

describe('MacrodatarefinementComponent', () => {
  let component: MacrodatarefinementComponent;
  let fixture: ComponentFixture<MacrodatarefinementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacrodatarefinementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacrodatarefinementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
