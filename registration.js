function registration() {

  this.initialize = function() {
    // Set the highlighted page because we have no sidebar
    //Tracker.highlightedPage = 'registration';
    // Register sign in callback
    //$('#registration-button').click(function(){Tracker.registration.register()});
    //alert("hi");
    // Register registration callback
    $('#registration-button').click(function(){Tracker.registration.register()});
    $('#login-back-button').click(function(){Tracker.registration.goToLogin()});
  }

  this.register = function() {
    var username = $('#register-user').val();
    var name = $('#register-name').val();
    var email = $('#register-email').val();
    var phone = $('#register-phone').val();
    var password = $('#register-pass').val();
    //alert(username + " " + password);
    //var User = new user();
    Tracker.user.signUp(username, password, name, email, phone);
    //alert("Registered");
  }

  this.goToLogin = function() {
    window.location.hash = 'login';
  }

}