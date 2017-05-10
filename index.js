//run this on cli to install dependences
//npm install node-rest-client --save
//goto the root folder and 
//open cli again and type 'node index.js' to run this script
var chalk       = require('chalk');
var request       = require('request');
var clear       = require('clear');
var http = require('http');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = CLI.Spinner;
var GitHubApi   = require('github');
var _           = require('lodash');
var git         = require('simple-git')();
var touch       = require('touch');
var fs          = require('fs');

var Client = require('node-rest-client').Client;
const url = 'https://api.github.com/search/users?q=developer+location:lagos+language:java'; 


//ar Client = require('node-rest-client').Client;
 
clear();
console.log(
  chalk.yellow(
    figlet.textSync('Medale', { horizontalLayout: 'full' })
  )
);
request
  .get(url)
  .on('response', function(response) {
    console.log(response) 
    console.log(response.headers['content-type']) // 'image/png' 
  });
 