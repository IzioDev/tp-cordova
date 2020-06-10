import {AbstractController} from './abstractController';
import {Router} from '../router';
import {Player} from '../models/player';

export class HomeController extends AbstractController {
  name = 'home';
  players = [new Player({playerNumber: 1}), new Player({playerNumber: 2})];

  constructor(router: Router) {
    super(router);
  }

  isThereMissingAvatarOnPlayers(): boolean {
    return !!this.players.find(
      (player) => !player.avatarBase64Image
    );
  }

  // Setup logic
  onShow(state: any) {
    // Setup upload image button click event
    const addPlayerImageButtons = $('.add-image-button');
    const confirmNicknameButtons = $('.confirm-nickname');

    const _this = this;

    confirmNicknameButtons.on('click', function () {
      const playerNumber = parseInt($(this).attr('player'));

      const nickNameValue = $(`#nickname-${playerNumber}`).val() as string;
      const messageErrorElement = $(`#error-message-${playerNumber}`);

      // Values error handling
      if (nickNameValue === "") {
        return messageErrorElement.text(`Le pseudo ne peut pas être vide.`).show();
      } else if (nickNameValue.length < 3) {
        return messageErrorElement.text(`Le pseudo doit contenir au moins 3 caractères.`).show();
      }

      for (const player of _this.players) {
        if (player.nickName === nickNameValue && player.number !== playerNumber) {
          return messageErrorElement.text(`Les deux joueurs ne peuvent pas avoir le même pseudo.`).show();
        }
      }

      messageErrorElement.hide();

      const existingPlayer = Player.fromLocalStorage(nickNameValue);
      if (existingPlayer !== null) {
        existingPlayer.number = playerNumber;
        _this.players[playerNumber - 1] = existingPlayer;

        $(`#image-p${playerNumber}`).attr(
          'src',
          `data:image/png;base64,${existingPlayer.avatarBase64Image}`
        );

        if (!_this.isThereMissingAvatarOnPlayers()) {
          _this.displayStartPlayButton();
        }
      } else {
        _this.players[playerNumber - 1].nickName = nickNameValue;
      }

      const playerImageContainer = $(`#image-container-${playerNumber}`);
      playerImageContainer.show();
    });

    addPlayerImageButtons.on("click", async function () {
      // Retrieve the player number (1 or 2)
      const playerNumber = parseInt($(this).attr('player'));

      const base64Image = await _this.players[
        playerNumber - 1
      ].takeAvatarPicture();

      $(`#image-p${playerNumber}`).attr(
        'src',
        `data:image/png;base64,${base64Image}`
      );

      if (!_this.isThereMissingAvatarOnPlayers()) {
        _this.displayStartPlayButton();
      }
    });
  }

  displayStartPlayButton() {
    $('#start-play-button')
      .show()
      .on("click", () => {
        for (const player of this.players) {
          player.saveToLocalStorage();
        }
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
