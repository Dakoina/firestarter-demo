import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedGamesListComponent } from './shared-games-list.component';

describe('SharedGamesListComponent', () => {
  let component: SharedGamesListComponent;
  let fixture: ComponentFixture<SharedGamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedGamesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
