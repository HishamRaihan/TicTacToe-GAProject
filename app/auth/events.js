'use strict';
// require the getFormFields funciton to get data from our forms
const getFormFields = require('../../lib/get-form-fields');
// require our api auth funcitons
const api = require('./api');
// require our ui funcitnos to update the page
const ui = require('./ui');

const onSignUp = function (event) {
	// prevent the default action of refreshing
	event.preventDefault();
	// event.target is the form that caused the submit event
	const form = event.target;
	// get the data form our form element
	const formData = getFormFields(form);
	// make a POST/sign-up request, pass it the email/password/confirmation
	api
		.signUp(formData)
		// if our sign-up request is succsessful, run the success function
		.then(ui.signUpSuccess)
		// if an error occured run the sign-up failure function
		.catch(ui.signUpFailure);
};

const onSignIn = function (event) {
	event.preventDefault();
	const form = event.target;
	const formData = getFormFields(form);
	api
  .signIn(formData)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  const form = event.target;
  const formData = getFormFields(form);
  api
  .changePassword(formData)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure);
}

const onSignOut = function (event){
	api.signOut()
		.then(ui.signOutSuccess)
		.catch(ui.signOutFailure);
}

module.exports = {
	onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
  
};
