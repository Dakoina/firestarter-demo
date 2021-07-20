import {Component, Input, OnInit} from '@angular/core';
import {GameNight, GameSelection, WishedGame} from "../../game.model";

@Component({
  selector: 'app-top-games-list',
  templateUrl: './top-games-list.component.html',
  styleUrls: ['./top-games-list.component.scss']
})
export class TopGamesListComponent implements OnInit {

  @Input() gameNight : GameNight = {};

  constructor() { }

  ngOnInit(): void {
  }

}
