import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {switchMap} from "rxjs/operators";
import {Game, GameNight, GameSelection} from "./game.model";

@Injectable({
  providedIn: 'root'
})
export class GamenightService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
  }

  /**
   * Get all games
   */
  getAllGames() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection<Game>('games', ref =>
              ref.orderBy('name')
            )
            .valueChanges({idField: 'id'});
        } else {
          return [];
        }
      })
    );
  }

  /**
   * Get a list of my games for a geven gamenight, sort by weight given to game (asc)
   * @param gameNightId
   */
  getMySelectedGames(gameNightId: string) {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection<GameSelection>("gameselections", ref =>
              ref.where("gamenightid", "==", gameNightId))
            .valueChanges({idField: 'id'})
        } else {
          return [];
        }
      })
    );
  }

  /**
   * Get all Gamenight documents, for this user
   */
  getAllGameNights() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          console.log("user is", user)
          return this.db
            .collection<GameNight>("gamenights", ref =>
              ref.orderBy("date", "asc").limit(5))
            .valueChanges({idField: 'id'})
        } else {
          return [];
        }
      })
    );
    // return this.db.collection<GameNight>("gamenights");
  }

  /**
   * Create compound document id for Gameselections based on the values from an existing gameselection object
   * @param game
   */
  generateGameSelectionDoc(game: GameSelection) {
    return game.gamenightid + "_" + game.gameid + "_" + game.uid;
  }

  /**
   * Remove a previously selected game from the list:
   * - remove the game from the list
   * - and the server
   * - update weights of the other games if it was not the last game in the list
   * @param gameToRemove
   */
  removeSelectedGame(gameToRemove: GameSelection) {
    this.db.collection<GameSelection>("gameselections").doc(this.generateGameSelectionDoc(gameToRemove))
      .delete()
      .then(()=>console.log(gameToRemove.name + " has been deleted successfully"))
      .catch((error)=>console.error("Error deleting game " + gameToRemove.name, error));
  }

  /**
   * Add a new game to the list and update the wishlist scores
   * @param selectedGame
   */
  addSelectedGame(selectedGame: GameSelection){
    console.log("Adding game to selection ", selectedGame)
    // const ratingRef =
    this.db.collection<GameSelection>("gameselections").doc(this.generateGameSelectionDoc(selectedGame)).set(
      {
        gameid: selectedGame.gameid,
        gamenightid: selectedGame.gamenightid,
        gameweight: selectedGame.gameweight,
        name: selectedGame.name,
        uid: selectedGame.uid
      }
    );
  }

  /**
   * Update/add all the selected games on the server
   * - plus, update wishlist scores
   * @param myGamesList
   */
  updateSelectedGames(myGamesList: GameSelection[]) {
    console.log("lets update the selected games", myGamesList);
    // batch write/update
    const batch = this.db.firestore.batch();

    myGamesList.forEach(selectedGame => {
      // games nog niet bestaande op server
      if (selectedGame.id == undefined || null) {
        let newGameRef = this.db.collection<GameSelection>("gameselections").doc(this.generateGameSelectionDoc(selectedGame));
        batch.set(newGameRef.ref, {
          gameid: selectedGame.gameid,
          gamenightid: selectedGame.gamenightid,
          gameweight: selectedGame.gameweight,
          name: selectedGame.name,
          uid: selectedGame.uid
        });

      } else {
        // bestaat: update
        let updateRef = this.db.collection<GameSelection>("gameselections").doc(this.generateGameSelectionDoc(selectedGame));
        batch.update(updateRef.ref, {
          gameweight: selectedGame.gameweight
        });
      }
    });

    // finally commit
    batch.commit()
      .then((result) => {
        console.log("commit done", result);
      }).catch(error => console.log("error on commit", error));
  }

  getGameNight(gameNightId: string) {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection<GameNight>("gamenights", ref =>
              ref.where("gamenightid", "==", gameNightId))
            .valueChanges({idField: 'id'})
        } else {
          return [];
        }
      })
    );
  }
}
