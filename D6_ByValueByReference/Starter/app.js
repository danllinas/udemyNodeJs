//pass by value
function change(a) {
  a = 2;
}

var a = 1;

change(a);
console.log(a);


//passs by reference
function changeObj(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}

var c = {};

c.prop1 = {};

changeObj(c);
console.log(c);

