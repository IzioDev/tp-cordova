export class Router {
  constructor() {}

  switchToPage(pageName) {
    $.mobile.changePage(`#page-${pageName}`);
  }
}
