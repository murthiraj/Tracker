function vehiclesInitialize() {
  var User = Tracker.user;

  $('#plus-button').click(function(){
    window.open("#/new-vehicle", "_self");
  });

  showLoader();

  User.getUserVehicleList(function(vehicleArray) {

    var vehicles = "";

    for (var i = 0; i < vehicleArray.length; i++) {

      var vehicle = vehicleArray[i];
      var vehicleText = getVehicleTitle(vehicle);
      var vehicleHTML = '<div class="list-item" onclick="setVehiclePage(\''+ vehicle.objectId + '\', false)">'
                        + vehicleText + '</div>';

      vehicles += vehicleHTML;
    }

    $('#vehicle-list').html(vehicles);

    hideLoader();
  });
}

function getVehicleTitle(vehicle) {
  return vehicle.year + ' ' + vehicle.make + ' ' + vehicle.model;
}
