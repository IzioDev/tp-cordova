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
    console.log('Home controller showed up !');

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

      console.log(isThereMissingAvatarOnPlayers);
      if (!isThereMissingAvatarOnPlayers) {
        _this.displayStartPlayButton();
      }
    });
  }

  displayStartPlayButton() {
    $('#start-play-button').show();
  }

  // Clean logic
  onHide() {
    console.log('Home controller hide !');
  }
}
