import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface Game {
  id?: string;
  name?: string;
  description?: string;
  minPlayers?: number;
  maxPlayers?: number;
  yearPublished?: string;
  imageThumbSquare?: string;
  imageThumbSquareFit?: string;
  bestMinPlayers?: string;
  bestMaxPlayers?: string;
  recommendedMinPlayers?: string;
  recommendedMaxPlayers?: string;
  statsAverage?: number;
}

export interface GameSelection {
  id?: string;
  gameid?: string;
  gamenightid?: string;
  gameweight?: number;
  name?: string;
  uid?: string;
}

export interface GameNight {
  id?: string;
  date?: Date;
  description?: string;
}

