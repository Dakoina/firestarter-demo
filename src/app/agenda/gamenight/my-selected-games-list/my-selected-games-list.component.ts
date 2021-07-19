import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Game, GameSelection} from "../../game.model";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {GamenightService} from "../../gamenight.service";

@Component({
  selector: 'app-my-selected-games-list',
  templateUrl: './my-selected-games-list.component.html',
  styleUrls: ['./my-selected-games-list.component.scss']
})
export class MySelectedGamesListComponent {

  @Input() gameNightId: string ="";
  @Input() games: GameSelection[] = []

  @Output() orderChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeGame: EventEmitter<GameSelection> = new EventEmitter<GameSelection>();

  constructor(private gameNightService : GamenightService) { }

  gameDrop(event: CdkDragDrop<GameSelection>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(this.games, event.previousIndex, event.currentIndex);
      // emit event that the order has changed
      this.orderChanged.emit("order changed");
    } else {
      console.log("moving between containers")
    }


  }

  removeGameFromList(game: GameSelection) {
    this.removeGame.emit(game);
  }
}
