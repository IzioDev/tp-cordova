// Avoid missing implementation of basics controller methods.
export class AbstractController {
  constructor(router) {
    if (!router) {
      throw new Error(
        'If you overrided the constructor controller, make sure to pass the router in the super call'
      );
    }
    this.router = router;
  }

  onShow() {}

  onHide() {}

  switchToPage(routeName) {
    this.router.switchToPage(routeName);
  }
}
