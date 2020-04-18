import { Router } from '../router';

// Avoid missing implementation of basics controller methods.
export abstract class AbstractController {
  router: Router;

  constructor(router: Router) {
    if (!router) {
      throw new Error(
        'If you overrided the constructor controller, make sure to pass the router in the super call'
      );
    }
    this.router = router;
  }

  // State is possibly undefined
  onShow(state: any) {}

  onHide() {}

  switchToPage(routeName: string, state: any = null) {
    this.router.switchToPage(routeName, state);
  }
}
