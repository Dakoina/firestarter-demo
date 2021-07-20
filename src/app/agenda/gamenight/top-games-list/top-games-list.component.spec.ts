import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGamesListComponent } from './top-games-list.component';

describe('TopGamesListComponent', () => {
  let component: TopGamesListComponent;
  let fixture: ComponentFixture<TopGamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopGamesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
