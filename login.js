function login() {

  this.initialize = function() {
    // Set the highlighted page because we have no sidebar
    Tracker.highlightedPage = 'login';
    // Register sign in callback
    $('#login-button').click(function(){Tracker.login.login()});
    // Register registration callback
    $('#register-button').click(function(){Tracker.login.goToRegistration()});
er
    // auto login if user is already authentication
    var currentUser = Parse.User.current();
    if (currentUser) {
      // go to vehicles page
      window.location.hash = 'vehicles';
    }
    // else continue to login
  }

  this.login = function() {
    var username = $('#login-user').val();
    var password = $('#login-pass').val();
    showLoader();
    Tracker.user.login(username, password);
    hideLoader();
  }

  this.goToRegistration = function() {
    window.location.hash = 'registration';
  }

}
