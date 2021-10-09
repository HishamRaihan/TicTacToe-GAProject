'use strict';
// require the config file to have our API's url
const config = require('..//config');
// require the store file so we have access to the store object
const store = require('../store');

// formData will be our credentials object w/ email,password, and confirmation
const signUp = function (formData) {
	// make a request to POST/sign-up
	return $.ajax({
		url: `${config.apiUrl}/sign-up`,
		method: 'POST',
		// make sure to send to formData along as the body of our request
		// this is similar to --data in the curl script
		data: formData,
	});
};

const signIn = function (formData) {
	return $.ajax({
		url: `${config.apiUrl}/sign-in`,
		method: 'POST',
		data: formData,
	});
};

const changePassword = function (formData) {
	return $.ajax({
		url: `${config.apiUrl}/change-password`,
		method: 'PATCH',
		data: formData,
    // add the authorization header so the api can use the token to know which user is trying to change their password
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
	});
};

const signOut = function (formData) {
	return $.ajax({
		url: `${config.apiUrl}/sign-out`,
		method: 'DELETE',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	});
};


module.exports = {
	signUp,
	signIn,
	changePassword,
  signOut
};
