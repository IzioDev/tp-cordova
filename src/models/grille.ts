export enum ECaseStatus {
  VIDE,
  P1,
  P2,
}

export class Grille {
  cases: ECaseStatus[][];

  constructor() {
    this.viderGrille();
  }

  viderGrille() {
    this.cases = [
      [ECaseStatus.VIDE, ECaseStatus.VIDE, ECaseStatus.VIDE],
      [ECaseStatus.VIDE, ECaseStatus.VIDE, ECaseStatus.VIDE],
      [ECaseStatus.VIDE, ECaseStatus.VIDE, ECaseStatus.VIDE],
    ];
    console.log('Grille vidée : ', this.cases);
  }

  getCaseStatus(x: number, y: number) {
    if (x < 0 || x > 2) {
      throw new Error(`X out of range: ${x}`);
    }

    if (y < 0 || y > 2) {
      throw new Error(`Y out of range: ${y}`);
    }

    return this.cases[x][y];
  }

  setCaseStatus(x: number, y: number, status: ECaseStatus): Grille {
    if (x < 0 || x > 2) {
      throw new Error('X out of range');
    }

    if (y < 0 || y > 2) {
      throw new Error('Y out of range');
    }

    this.cases[x][y] = status;

    return this;
  }

  getCases() {
    return this.cases;
  }

  areAllCellsPlayed(): boolean {
    for (const lines of this.cases) {
      for (const cells of lines) {
        if (cells === ECaseStatus.VIDE) {
          return false;
        }
      }
    }
    return true;
  }
}
