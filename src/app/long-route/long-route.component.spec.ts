import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongRouteComponent } from './long-route.component';

describe('LongRouteComponent', () => {
  let component: LongRouteComponent;
  let fixture: ComponentFixture<LongRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
