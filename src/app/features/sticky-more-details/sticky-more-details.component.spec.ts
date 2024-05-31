import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyMoreDetailsComponent } from './sticky-more-details.component';

describe('StickyMoreDetailsComponent', () => {
  let component: StickyMoreDetailsComponent;
  let fixture: ComponentFixture<StickyMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyMoreDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickyMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
