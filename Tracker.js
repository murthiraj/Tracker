angular.module('Tracker', []);

function Tracker() {

  this.deviceready = false;

  this.user = new user();

  this.parse = new parse();

  this.login = new login();

  this.registration = new registration();
 
  this.profile = new profile();

  this.vehicles = new vehicles();

  this.settings = new settings();
  // Do the first settings load so they are available
  // as soon as the Trackerobject is
  this.settings.initialize();

  this.image_upload = new image_upload();

  this.highlightedPage = "vehicles-stolen";

  this.currentPage = "vehicle-stolen";

}

var Tracker = new tracker();

