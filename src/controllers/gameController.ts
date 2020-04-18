import { AbstractController } from './abstractController';
import { Player } from '../models/player';
import { Game } from '../models/game';
import { ECaseStatus } from '../models/grille';

export class GameController extends AbstractController {
  name: string = 'game';
  game: Game;

  onShow(players: Player[]) {
    this.game = new Game(players);

    this.displayGrille();
  }

  onHide() {}

  displayGrille() {
    const cases = this.game.getGrille().getCases();

    const getCellHtmlForCase = (x: number, y: number, status: ECaseStatus) => {
      if (status === ECaseStatus.VIDE) {
        return `<div x="${x + 1}" y="${y + 1}" class="cell"></div>`;
      }

      return `<div x="${x + 1}" y="${y + 1}" player=${
        status === ECaseStatus.P1 ? 1 : 2
      } class="cell"></div>`;
    };

    const boardContainerElement = $('#board-container');

    boardContainerElement.html(`
      <div class="board">
        <div class="row">
          ${getCellHtmlForCase(0, 0, cases[0][0])}
          ${getCellHtmlForCase(1, 0, cases[1][0])}
          ${getCellHtmlForCase(2, 0, cases[2][0])}
        </div>
        <div class="row">
          ${getCellHtmlForCase(0, 1, cases[0][1])}
          ${getCellHtmlForCase(1, 1, cases[1][1])}
          ${getCellHtmlForCase(2, 1, cases[2][1])}
        </div>
        <div class="row">
          ${getCellHtmlForCase(0, 2, cases[0][2])}
          ${getCellHtmlForCase(1, 2, cases[1][2])}
          ${getCellHtmlForCase(2, 2, cases[2][2])}
        </div>
      </div>
    `);

    // Set background images for played cells.
    cases.map((line, x) => {
      line.map((cell, y) => {
        if (cell !== ECaseStatus.VIDE) {
          const cellHtmlElement = $(`.cell[x=${x + 1}][y=${y + 1}]`);
          const player =
            cell === ECaseStatus.P1
              ? this.game.players[0]
              : this.game.players[1];

          cellHtmlElement.css(
            'background-image',
            `url("data:image/png;base64,${player.avatarBase64Image}")`
          );
        }
      });
    });

    this.initClickHandlersForGrille();
  }

  initClickHandlersForGrille() {
    const _this = this;

    $('.cell').on('click', function () {
      const cellHtmlElement = $(this);

      console.log(cellHtmlElement);

      const x = parseInt(cellHtmlElement.attr('x')) - 1;
      const y = parseInt(cellHtmlElement.attr('y')) - 1;

      console.log(x, y);

      const hasAlreadyBeenClicked = cellHtmlElement.attr('player');

      console.log(hasAlreadyBeenClicked);

      if (!hasAlreadyBeenClicked) {
        _this.game.playOnCell(x, y);

        _this.displayGrille();
      }
    });
  }
}
