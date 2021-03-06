'use strict';
// require the store object
// we will use it to share data between files
require('./functions')
const store = require('../store');

const playGame = () =>{
	$('.sq1').on('click', () => console.log('hey'))
};
           
const signUpSuccess = function (responseData) {
	// tell the user it was successful
	$('#user-display').text('Signed up successfully!');
	// remove existing classes, then add a green success class from bootstrap
	$('#user-display').removeClass();
	// changing the color for the success to green
	$('#user-display').addClass('text-secondary');
	//reset all of the forms it will clear it
	setTimeout(() => {
    // remove the message fromuser-display
    $("#user-display").html("");
    // remove the green color causes by `text-success`
    $("#user-display").removeClass("text-secondary");
  }, 5000);
	$('form').trigger('reset');
	console.log('responseData is', responseData);
};

const signUpFailure = function (error) {
	// tell the user it was successful
	$('#error-message').text('Sign up Failed!');
	// remove existing classes, then add a green success class from bootstrap
	$('#error-message').removeClass();
	// changing the color for the success to red
	$('#error-message').addClass('text-danger').removeClass(5000);
	// print the error
	console.error('error is', error);
	setTimeout(() => {
    // remove the message fromuser-display
    $("#error-message").html("");
    // remove the green color causes by `text-success`
    $("#user-message").removeClass("text-danger");
  }, 5000);
  $("form").trigger("reset");
};

const signInSuccess = function (responseData) {
	// we are going to add the user we got back in our responses data
	// to the store object. so we can access the users token
	// later in api.js
	store.user = responseData.user;
  console.log('User is', store);
  // tell user sign in was successful
	$('#user-display').text('Sign In Successful!');
	$('#user-display').removeClass();
	$("#user-display").addClass("text-secondary");
	// after we sign-in we hide the section before-sign-in
	$('#before-sign-in').hide();
	// after we sign-in we show the section after-sign-in
	$('#after-sign-in').show();

	console.log('responseData is', responseData);
	setTimeout(() => {
    // remove the message fromuser-display
    $("#user-display").html("");
    // remove the green color causes by `text-success`
    $("#user-display").removeClass("text-secondary");
  }, 5000);
  $("form").trigger("reset");
};

const signInFailure = function (error) {
	$('#error-message').text('Sign In Failed!');
	$('#error-message').removeClass();
	$('#error-message').addClass('text-danger');
	console.log('error is', error);
	setTimeout(() => {
    // remove the message fromuser-display
    $("#error-message").html("");
    // remove the red color caused by `text-danger`
    $("#error-message").removeClass("text-danger");
  }, 5000);
};

const changePasswordSuccess = function(responseData){
	$('#user-display').text('Password changed successfully!');
	$('#user-display').removeClass();
	$('#user-display').addClass("text-success");
	$('form').trigger('reset');
	console.log('responseData is', responseData);
}

const changePasswordFailure = function(error){
	$('#error-message').text('Change password Failed!');
	$('#error-message').removeClass();
	$('#error-message').addClass('text-danger');
	console.error('error is', error);
}
const signOutSuccess = function(responseData){
	$('#user-display').text('Signed out successfully!');
	$('#user-display').removeClass();
	$("#user-display").addClass("text-light bg-dark");
	$('form').trigger('reset');

  // to go back to the sign-in page
  $('#after-sign-in').hide()
  $('#before-sign-in').show()

  	console.log('responseData is', responseData);
    
}
const signOutFailure = function (error) {
	$('#error-message').text('Sign Out Failed!');
	$('#error-message').removeClass();
	$('#error-message').addClass("text-danger");
	console.error('error is', error);
	setTimeout(() => {
    // remove the message fromuser-display
    $("#user-display").html("");
    // remove the green color causes by `text-success`
    $("#user-display").removeClass("text-danger");
  }, 5000);
  $("form").trigger("reset");
};
const startGameSuccess = function(responseData){
	$("#user-display").text("Game Started Successfully!");
  $("#user-display").addClass("text-light bg-dark");
  $("#user-display").removeClass(5000);
	console.log('game',responseData);
	setTimeout(() => {
    // remove the message fromuser-display
    $("#user-display").html("");
    // remove the green color causes by `text-success`
    $("#user-display").removeClass("text-light bg-dark");
  }, 5000);
  $("form").trigger("reset");
}
const startGameFailure = function(error){
	$("#error-message").text("Sign Out Failed!");
  $("#error-message").removeClass();
  $("#error-message").addClass("text-danger");
  console.error("error is", error);
}
const onWin = function(responseData){

}

module.exports = {
	signUpFailure,
	signUpSuccess,
	signInSuccess,
	signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
	playGame,
	startGameSuccess,
	startGameFailure
};
