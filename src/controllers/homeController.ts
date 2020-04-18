import { AbstractController } from './abstractController';
import { Router } from '../router';
import { Player } from '../models/player';

export class HomeController extends AbstractController {
  name = 'home';
  players = [new Player(1), new Player(2)];

  constructor(router: Router) {
    super(router);
  }

  // Setup logic
  onShow(state: any) {
    // Setup upload image button click event
    const addPlayerImageButtons = $('.add-image-button');

    const _this = this;

    addPlayerImageButtons.click(async function () {
      // Retrieve the player number (1 or 2)
      const playerNumber = parseInt($(this).attr('player'));

      const base64Image = await _this.players[
        playerNumber - 1
      ].takeAvatarPicture();

      $(`#image-p${playerNumber}`).attr(
        'src',
        `data:image/png;base64,${base64Image}`
      );

      const isThereMissingAvatarOnPlayers = _this.players.find(
        (player) => !player.avatarBase64Image
      );

      if (!isThereMissingAvatarOnPlayers) {
        _this.displayStartPlayButton();
      }
    });
  }

  displayStartPlayButton() {
    $('#start-play-button')
      .show()
      .click(() => {
        this.switchToPage('game', this.players);
      });
  }

  // Clean logic
  onHide() {
    $('#start-play-button').hide().off();
    $('.add-image-button').off();
    $(`#image-p1`).attr('src', '');
    $(`#image-p2`).attr('src', '');
  }
}
