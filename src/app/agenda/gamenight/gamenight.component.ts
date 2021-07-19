import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GamenightService} from "../gamenight.service";
import {Game, GameSelection} from "../game.model";
import {Subscription} from "rxjs";
import firebase from "firebase/app";

@Component({
  selector: 'app-gamenight',
  templateUrl: './gamenight.component.html',
  styleUrls: ['./gamenight.component.scss']
})
export class GamenightComponent implements OnInit, OnDestroy {

  gameNightId: string = "";
  gamesList: Game[] = [];
  myGamesList: GameSelection[] = [];

  subGames: Subscription = new Subscription();
  subMySelection: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private gameNightService: GamenightService) {
    // set the game night id for the component
    // @ts-ignore
    this.gameNightId = this.route.snapshot.paramMap.get('id');
  }

  ngOnDestroy(): void {
    this.subGames.unsubscribe();
    this.subMySelection.unsubscribe();
  }


  ngOnInit(): void {
    this.subGames = this.gameNightService
      .getAllGames()
      .subscribe(games => {
        this.gamesList = games;
      });
    this.subMySelection = this.gameNightService
      .getMySelectedGames(this.gameNightId)
      .subscribe(games => {
        // @ts-ignore
        this.myGamesList = games.sort((a, b) => b.gameweight - a.gameweight)
      });
  }

  /**
   * Add a game to my selection:
   * - item cannot already be in the list
   * - check for max 5 different games
   * - add new item to the list
   * - reset the weights for all if needed
   * - update changes (list) to server as batch
   * @param game
   */
  addGameToSelection(game: Game) {
    const MAX_ITEMS = 5;

    // rule 1: item cannot be already in the list
    if (this.myGamesList.find(element => element.gameid === game.id)) {
      alert("item already in list");
      return;
    }

    // rule 2: no more than 5 items selected
    if (this.myGamesList.length >= MAX_ITEMS) {
      alert("No more than 5 items in the list")
      return;
    }

    // add new item to list
    const user = firebase.auth().currentUser;

    // but convert game to gameselection obj
    let selectedGame: GameSelection = {
      gameid: game.id,
      gamenightid: this.gameNightId,
      uid: user?.uid,
      gameweight: 5,
      name: game.name
    }
    this.myGamesList.push(selectedGame);

    // reset weights
    this.updateWeights()
    this.gameNightService.updateSelectedGames(this.myGamesList);
  }

  /**
   * On order change of my selected games, reset the weights and update server
   * @param $event
   */
  mySelectionOrderChanged($event: string) {
    // reset weights
    this.updateWeights()
    this.gameNightService.updateSelectedGames(this.myGamesList);
  }


  /**
   * This function updates the weights of the selected games list.
   * Top item gets 5, next 3, 2, 1 and 0
   */
  updateWeights() {
    console.log("Updating weights, before", this.myGamesList);
    let weights = [5, 3, 2, 1, 0];
    this.myGamesList.forEach(item => {
      item.gameweight = weights.shift()
    });
    console.log("Updating weights, after", this.myGamesList);
  }

  /**
   * Let's remove the game from the selection list
   * @param $event
   */
  removeGameFromSelection($event: GameSelection) {
    // just remove the item from the servers list
    console.log("Removing " + $event.name)
    this.gameNightService.removeSelectedGame($event);

    // remove the item from the list
    //if it's not the last item adjust the weights
    const idx = this.myGamesList.findIndex(el => el.gameid === $event.gameid);
    console.log("Index of item", idx);
    console.log("Length of list", this.myGamesList.length);

    if (idx > -1) {
      this.myGamesList.splice(idx, 1)
    }
    // update weights
    this.updateWeights()
    // update all on server
    this.gameNightService.updateSelectedGames(this.myGamesList);
  }
}
