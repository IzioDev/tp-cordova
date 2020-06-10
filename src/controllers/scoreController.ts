import {AbstractController} from "./abstractController";
import {Router} from "../router";
import {Player} from "../models/player";

export class ScoreController extends AbstractController {
  name = 'score';

  constructor(router: Router) {
    super(router);
  }

  onShow({players, winner}: {players: Player[], winner: Player | null}) {
    console.log(players);
    console.log(winner);
  }
}
