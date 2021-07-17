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

export interface GameNight {
  id?: string;
  date?: string;
  invitees?: Invitee[];

}

export interface Invitee {
  id?: string;
  name: string;
  status?: "aanwezig" | "afwezig" | "nog geen reactie" | "twijfel";
}
