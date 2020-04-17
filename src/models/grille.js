export class Grille {
  constructor() {
    console.debug('Grid initialized');
    this.viderGrille();
  }

  viderGrille() {
    this.cases = [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ];
  }

  getCaseStatus(x, y) {
    if (x < 0 || x > 2) {
      throw new Error('X out of range');
    }

    if (y < 0 || y > 2) {
      throw new Error('Y out of range');
    }

    return this.cases[x][y];
  }

  setCaseStatus(x, y, status) {
    if (x < 0 || x > 2) {
      throw new Error('X out of range');
    }

    if (y < 0 || y > 2) {
      throw new Error('Y out of range');
    }

    if (status != -1 && status != 0 && status != 1) {
      throw new Error(
        'Status has to be either -1 (empty), 0 (player 1) or 1 (player 2)'
      );
    }
  }
}
