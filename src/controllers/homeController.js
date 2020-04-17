import { AbstractController } from './abstractController';

export class HomeController extends AbstractController {
  constructor(router) {
    super(router);
  }

  onShow() {
    console.log('Home controller showed up !');
  }

  onHide() {
    console.log('Home controller hide !');
  }
}
