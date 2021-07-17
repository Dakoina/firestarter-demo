import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from "../../game.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shared-games-list',
  templateUrl: './shared-games-list.component.html',
  styleUrls: ['./shared-games-list.component.scss']
})
export class SharedGamesListComponent implements OnInit {

  // should be a list of shared games between invitees
  @Input() games: Game[]=[];

  @Output() addedGame: EventEmitter<Game> = new EventEmitter<Game>();

  constructor() { }

  ngOnInit(): void {
  }


  addGame(game: Game) {
    this.addedGame.emit(game);
  }
}
