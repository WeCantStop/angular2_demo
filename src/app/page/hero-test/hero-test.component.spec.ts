import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTestComponent } from './hero-test.component';

describe('HeroTestComponent', () => {
  let component: HeroTestComponent;
  let fixture: ComponentFixture<HeroTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroTestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
