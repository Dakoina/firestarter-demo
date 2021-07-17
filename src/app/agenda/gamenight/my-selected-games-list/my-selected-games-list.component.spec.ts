import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySelectedGamesListComponent } from './my-selected-games-list.component';

describe('MySelectedGamesListComponent', () => {
  let component: MySelectedGamesListComponent;
  let fixture: ComponentFixture<MySelectedGamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySelectedGamesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySelectedGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
