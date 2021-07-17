import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../game.model";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {GamenightService} from "../../gamenight.service";

@Component({
  selector: 'app-my-selected-games-list',
  templateUrl: './my-selected-games-list.component.html',
  styleUrls: ['./my-selected-games-list.component.scss']
})
export class MySelectedGamesListComponent {

  @Input() gameNightId: string ="";
  @Input() games: Game[] = []

  constructor(private gameNightService : GamenightService) { }

  gameDrop(event: CdkDragDrop<Game>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(this.games, event.previousIndex, event.currentIndex);
    } else {
      console.log("not currnt container")
    }
    // update to firestore server
    // this.gameNightService.updateMySelection(this.gameNightId, this.games);

  }

  removeDroppedGame(event: CdkDragDrop<Game>){
    console.log(event)

  }
  removeGame(game: Game) {
    const idx = this.games.indexOf(game);
    if (idx > -1){
      this.games.splice(idx,1)
    }
  }
}
