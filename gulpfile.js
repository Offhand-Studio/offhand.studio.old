/*
  Default gulp setup file.
  we moved all tasks to ./gulp/**
  so we have to require all of them here…
  for configuration of all tasks see ./gulpconfig.js
*/


'use strict';

var gulp = require('gulp');
var HubRegistry = require('gulp-hub');

// load some files into the registry
var hub = new HubRegistry(['tasks/*.js']);

// tell gulp to use the tasks just loaded
gulp.registry(hub);
