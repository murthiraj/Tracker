/* Generic controller constructor for the all the pages */
function menuControl($scope) {
  'use strict';
  $scope.snapOpts = {
    disable: 'right',
    hyperextensible: false
  };

  $scope.disable = function(side) {
    $scope.snapOpts.disable = side;
  };

  $scope.enable = function() {
    $scope.snapOpts.disable = 'none';
  };
  
  // Stop the map on the vehicle page from updating
  if (intervalId != null){
    clearInterval(intervalId);
    intervalId = null;
  }
  oldPos = null;
  oldCurrentLoc = null;
  newVehicle.curImage = null;
  Tracker.currentPage = null;
}

function checkLoggedIn(){
    // redirect to login page if not authenticated
    var currentUser = Parse.User.current();
    if (!currentUser) {
      // go to login page
      window.location.hash = 'login';
    }
}

angular.module('Tracker.controllers', [])

  .controller('MenuCtrl', function($scope) {
     checkLoggedIn();
     menuControl($scope);
  })
  .controller('MapCtrl', function($scope) {
     checkLoggedIn();    
     menuControl($scope);
     Tracker.currentPage = "vehicle-map";
     vehicleInfoInitialize();
  })
  .controller('ProfileCtrl', function($scope) {
     checkLoggedIn();    
     menuControl($scope);
     Tracker.profile.initialize();
  })
  .controller('StolenCtrl', function($scope) {
     checkLoggedIn();    
     menuControl($scope);
     stolenInitialize();
  })
  .controller('VehiclesCtrl', function($scope) {
     checkLoggedIn();    
     menuControl($scope);
     vehiclesInitialize();
  })
  .controller('LoginCtrl', function($scope) {
     menuControl($scope);
     Tracker.login.initialize();
     snapper.disable();
  })
  .controller('SettingsCtrl', function($scope) {
     checkLoggedIn();    
     menuControl($scope);
     Tracker.settings.initialize();
  })
  .controller('RegistrationCtrl', function($scope) {
     menuControl($scope);
     Tracker.registration.initialize();
     snapper.disable();
  })
  .controller('NewVehicleCtrl', function($scope) {
     checkLoggedIn();    
     menuControl($scope);
     Tracker.currentPage = "new-vehicle";
     newVehicle.initialize();
  })
  .controller('TrackCtrl', function($scope) {
     menuControl($scope);
     Tracker.currentPage = "track";
     trackInitialize();
  })

  // That's all folks
  ;
