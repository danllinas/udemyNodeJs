var greet = require('./greet1');
greet();


var greet2 = require('./greet2').greet; //when you see .something after the initial require call, you're reaching down into that Object to grab a method associated with it. 
greet2();


var greet3 = require('./greet3');
greet3.greet();
greet3.greeting  = "Changed hello world!";

var greet3b = require('./greet3');
greet3b.greet();


var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();


var greet5 = require('./greet5');
greet5.greet();


//no one right way. It's an architectural choice. If you simply return an object, it will be cached. Calling require later will get you back that same cached object. 
