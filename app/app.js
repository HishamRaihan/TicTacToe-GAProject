"use strict";

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require("./auth/events");
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $("#sign-up").on("submit", authEvents.onSignUp);
});

$(() => {
  // your JS code goes here
  $("#sign-in").on("submit", authEvents.onSignIn);
});

$(() => {
  // your JS code goes here
  $("#change-password").on("submit", authEvents.onChangePassword);
});

$(() => {
  // your JS code goes here
  $("#sign-out").on("click", authEvents.onSignOut);

  $('#start-game').on('click', authEvents.onStartGame)
  
});
