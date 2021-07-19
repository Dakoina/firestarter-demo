import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamenightService} from "../gamenight.service";
import {GameNight} from "../game.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit, OnDestroy {

  gameNights: GameNight[] = [];

  sub: Subscription = new Subscription();

  constructor(private gameNightService : GamenightService) {
  }

  ngOnInit(): void {
    this.sub = this.gameNightService
      .getAllGameNights()
      .subscribe(gameNights => {
        console.log("game nights:", gameNights)
        this.gameNights = gameNights;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
