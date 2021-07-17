import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GamenightService} from "../gamenight.service";
import {Game} from "../game.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-gamenight',
  templateUrl: './gamenight.component.html',
  styleUrls: ['./gamenight.component.scss']
})
export class GamenightComponent implements OnInit {

  id: string | null;
  gamesList: Game[] = [];
  myGamesList: Game[] = [];

  sub: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private gameNightService: GamenightService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    this.sub = this.gameNightService
      .getAllGames()
      .subscribe(games => {
        this.gamesList = games;
        console.log(games, "lijst van games")
      });
  }

  addGameToSelection(game: Game) {
    this.myGamesList.push(game);
  }
}
