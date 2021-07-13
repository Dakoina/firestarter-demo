export interface Game {
  id?: string;
  name?: string;
  thumbnail?: string;
  minPlayers?: number;
  maxPlayers?: number;
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
