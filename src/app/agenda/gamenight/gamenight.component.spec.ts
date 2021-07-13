import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamenightComponent } from './gamenight.component';

describe('GamenightComponent', () => {
  let component: GamenightComponent;
  let fixture: ComponentFixture<GamenightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamenightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamenightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
