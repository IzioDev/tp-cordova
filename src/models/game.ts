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

  isCellPlayedByPlayer(x: number, y: number, p: Player) {
    const cellStatus = this.grille.getCaseStatus(x, y);

    if (cellStatus === ECaseStatus.VIDE) {
      return false;
    }

    return (
      (cellStatus === ECaseStatus.P1 && p.number === 1) ||
      (cellStatus === ECaseStatus.P2 && p.number === 2)
    );
  }

  getPlayerFromPlayedCell(x: number, y: number) {
    const cellStatus = this.grille.getCaseStatus(x, y);

    return cellStatus === ECaseStatus.P1 ? this.players[0] : this.players[1];
  }

  getWinnerIfExists() {
    const winningSequences = [
      // verticaly
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      // horizontaly
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      // diagonal
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (const winningSequence of winningSequences) {
      const winner = winningSequence.reduce(
        (acc: Player | null | undefined, [x, y]) => {
          if (
            acc !== null &&
            this.grille.getCaseStatus(x, y) !== ECaseStatus.VIDE
          ) {
            if (acc === undefined || this.isCellPlayedByPlayer(x, y, acc)) {
              return acc ? acc : this.getPlayerFromPlayedCell(x, y);
            } else {
              return null;
            }
          }
          return null;
        },
        undefined
      );

      if (winner) {
        return winner;
      }
      return null;
    }
  }
}
