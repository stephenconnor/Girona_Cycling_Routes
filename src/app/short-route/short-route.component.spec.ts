import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortRouteComponent } from './short-route.component';

describe('ShortRouteComponent', () => {
  let component: ShortRouteComponent;
  let fixture: ComponentFixture<ShortRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
