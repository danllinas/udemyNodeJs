var greetings = require('./greetings.json');

var greet = function() {
  return greetings.en; 
}

module.exports = greet;