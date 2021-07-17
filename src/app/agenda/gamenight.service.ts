import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {switchMap} from "rxjs/operators";
import {Board} from "../kanban/board.model";
import {Game, GameNight} from "./game.model";

@Injectable({
  providedIn: 'root'
})
export class GamenightService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  /**
   * Get all games
   */
  getAllGames(){
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection<Game>('games', ref =>
              ref.orderBy('name')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }
}
