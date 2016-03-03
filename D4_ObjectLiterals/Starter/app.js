// Your Javascript Code Goes Here
var person = {
  name: "Danny",
  age: 40,
  sign: "Aquarius",
  address: {
    street: "Biscayne", 
    city: "Miami"
  },
  greet: function() {
    console.log('Hello ' + this.name + ' you ' + this.age + ' old fart!');    
  }
  
}

person.greet();

console.log(person.address.street);
console.log(person['name']);