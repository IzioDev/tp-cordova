import './styles/index.scss';
import { Router } from './router';
import { AbstractController } from './controllers/abstractController';
import { registeredControllers } from './registeredControllers';

export class Application {
  router: Router;
  controllers: Map<string, AbstractController> = new Map();

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
    // We do whant to use a router from the top level application.
    this.router = new Router();

    // For each controllers in registered controller, we instanciate it.
    for (const controller of registeredControllers) {
      // We create a new instance of this controller.
      const instanciateController = new controller(this.router);

      if (!instanciateController.name) {
        throw new Error(`Controller should have a name property.`);
      }

      // We add it to the map, so we can have them all by their registered name.
      this.controllers.set(instanciateController.name, instanciateController);
    }

    this.router.setControllers(this.controllers);
  }

  /**
   * Handle the deviceready event
   * @see http://cordova.apache.org/docs/en/5.4.0/cordova/events/events.deviceready.html
   * @emits {deviceready} a deviceready event
   * @param {Event} the deviceready event object
   */
  onDeviceReady() {
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
  receivedEvent(id: string) {
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
