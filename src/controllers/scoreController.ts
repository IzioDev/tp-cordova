import {AbstractController} from "./abstractController";
import {Router} from "../router";
import {Player} from "../models/player";

export class ScoreController extends AbstractController {
  name = 'score';

  constructor(router: Router) {
    super(router);
  }

  onShow({players, winner}: {players: Player[], winner: Player | null}) {
    const winnerMessageElement = $('#winner-message');

    if (winner) {
      const winnerAvatarElement = $('#winner-avatar');

      winner.victoryCount++;
      winnerMessageElement.text(`Le gagnant est ${winner.nickName}, il a maintenant ${winner.victoryCount} victoires.`);

      winnerAvatarElement.attr("src", `data:image/png;base64,${winner.avatarBase64Image}`).css("display", "block");

      for (const player of players) {
        if (player !== winner) {
          player.defeatCount++;
        }
        player.saveToLocalStorage();
      }

    } else {
      winnerMessageElement.text(`Match nul !`)
    }

    const allPlayers = Player.allFromLocalStorage();

    const tbodyContainerElement = $("#score-table-container");
    tbodyContainerElement.html("");
    for (const player of allPlayers) {
      tbodyContainerElement.append(`
        <tr>
            <th>${player.nickName}</th>
            <th>${player.victoryCount}</th>
            <th>${player.defeatCount}</th>
        </tr>
      `)
    }
  }
}
