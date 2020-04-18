/// <reference types="jquerymobile" />

import { AbstractController } from './controllers/abstractController';

export class Router {
  activeController: AbstractController;
  controllers: Map<string, AbstractController>;

  switchToPage(pageName: string, state?: any) {
    const controller = this.controllers.get(pageName);

    if (!controller) {
      throw new Error(`Cannot find controller named: ${pageName}`);
    }

    if (this.activeController) {
      this.activeController.onHide();
    }

    $.mobile.changePage(`#page-${pageName}`);
    controller.onShow(state);
    this.activeController = controller;
  }

  setControllers(controllers: Map<string, AbstractController>) {
    this.controllers = controllers;
  }
}
