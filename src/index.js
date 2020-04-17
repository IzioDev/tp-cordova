import './styles/index.scss';
import { Grille } from './models/grille';
import { HomeController } from './controllers/homeController';
import { Router } from './router';
import { registeredControllers } from './registeredControllers';

export class Application {
  /**
   * Create the application instance
   */
  constructor() {
    console.log('Hello HelloWorldssss');
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    );

    // Instanciate all controllers.
    this.initiateControllers();
  }

  // Utils used to instanciate all controllers registered in
  // `./registeredControllers`, note that homeController is mandatory.
  initiateControllers() {
    this.controllers = new Map();

    // We do whant to use a router from the top level application.
    this.router = new Router(this.controllers);

    registeredControllers.forEach((controllerName) => {
      // We first fetch the ESMoule.
      const controllerModule = require(`./controllers/${controllerName}Controller`);
      // We find the controller property of it.
      const controllerClassName = Object.keys(controllerModule).find(
        (name) => name.indexOf('Controller') != -1
      );

      if (!controllerClassName) {
        throw new Error(
          `The Controller ${controllerName} should be named ${controllerName}Controller.`
        );
      }

      // We create a new instance of this controller.
      const instanciateController = new controllerModule[controllerClassName](
        this.router
      );

      // We add it to the map, so we can have them all by their registered name.
      this.controllers.set(controllerName, instanciateController);
    });

    this.router.setControllers(this.controllers);
  }

  /**
   * Handle the deviceready event
   * @see http://cordova.apache.org/docs/en/5.4.0/cordova/events/events.deviceready.html
   * @emits {deviceready} a deviceready event
   * @param {Event} the deviceready event object
   */
  onDeviceReady(e) {
    this.receivedEvent('deviceready');

    // If the actual page isn't the laoding page, we do not set a delay.
    if (window.location.hash && window.location.hash !== '#page-loading') {
      this.router.switchToPage('home');
    } else {
      // It's just to display the spinner, else it get loaded too fast.
      setTimeout(() => {
        this.router.switchToPage('home');
      }, 2000);
    }
  }

  // Update DOM on a Received Event
  receivedEvent(id) {
    console.log('[Application#receivedEvent] id = ', id);
  }
}

// When the DOM is ready, we bootstrap the application
// by creating a new instance of the app.
document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('jQuery Ready, now instantiate the Application');
    new Application();
  },
  false
);
