export class Router {
  switchToPage(pageName, state) {
    const controller = this.controllers.get(pageName);

    if (!controller) {
      throw new Error(`Cannot find controller named: ${pageName}`);
    }

    $.mobile.changePage(`#page-${pageName}`);
    controller.onShow(state);
  }

  setControllers(controllers) {
    this.controllers = controllers;
  }
}
