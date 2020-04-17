import './styles/index.scss';
import { Grille } from './models/grille';

export class Application {
  /**
   * Create the application instance
   */
  constructor() {
    console.debug('Hello HelloWorld');
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    );
  }

  /**
   * Handle the deviceready event
   * @see http://cordova.apache.org/docs/en/5.4.0/cordova/events/events.deviceready.html
   * @emits {deviceready} a deviceready event
   * @param {Event} the deviceready event object
   */
  onDeviceReady(e) {
    console.debug('[Application#onDeviceReady] event = ', e);

    // Initiate the grid
    this.grille = new Grille();

    this.receivedEvent('deviceready');
  }

  // Update DOM on a Received Event
  receivedEvent(id) {
    console.debug('[Application#receivedEvent] id = ', id);
  }
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('jQuery Readys, now instantiate the Application');
    new Application();
  },
  false
);
