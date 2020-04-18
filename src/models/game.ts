import { Player } from './player';
import { Grille, ECaseStatus } from './grille';

export class Game {
  players: Player[];
  grille: Grille;
  lastPlay: Player;

  constructor(players: Player[]) {
    this.players = players;
    this.grille = new Grille();
  }

  getGrille(): Grille {
    return this.grille;
  }

  playOnCell(x: number, y: number) {
    if (!this.lastPlay || this.lastPlay.number === 2) {
      this.lastPlay = this.players[0];

      this.grille.setCaseStatus(x, y, ECaseStatus.P1);
    } else {
      this.lastPlay = this.players[1];

      this.grille.setCaseStatus(x, y, ECaseStatus.P2);
    }
  }
}
