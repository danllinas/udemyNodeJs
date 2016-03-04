var greetings = require('./greetings.json');


var greet = function() {
  return greetings.es; 
}

module.exports = greet;