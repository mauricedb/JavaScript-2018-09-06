'use strict';

// function getStuff() {
//   return {
//     x: 1
//   };
// }

// console.log(getStuff());

// function executeStuff(fn){

//   fn.firstName = 'Maurice';
//   fn.firstName = 1
//   fn();
//   fn();

//   console.log(typeof fn.firstName)
// }

// executeStuff(function(){
//   var firstName = 'Jack'

//   console.log('in stuff: ' + firstName)
// })

// function calculator() {
//   var sum = 0;

//   return {
//     add: function(x) {
//       sum = sum + x;
//     },
//     print: function() {
//       console.log(sum);
//     }
//   };
// }

// var calc = calculator();

// calc.add(10);
// calc.print();
// calc.add(5);
// calc.print();
// calc.add(100);
// calc.print();

// var numbers = [1, 3, 5, 8, 'a', 'b'];

// numbers.forEach(function(value) {
//   console.log(value);
// });

// var newArray = numbers.map(function(value){
//   return {
//     value: value
//   }
// })

// console.table(newArray)

// function add() {
//   console.table(arguments);
// }

// add(1, 2, 3);
// add(1, [2, 3]);
// add([1, 2, 3]);

// add.apply(null, [11,22,33])

function Mammal() {}

Mammal.prototype.whoAmI = function() {
  console.log('I am a mammal');
};

function Cat(name) {
  this.name = name;
}

function Person(name, age) {
  this.name = name;
  this.email = 'maurice.de.beijer@gmail.com';
  this.age = age;

  // this.print = function(){
  //   console.log('Ik ben ' + this.name)
  // }
}

Person.prototype = new Mammal();

Person.prototype.print = function() {
  console.log(this);
  console.log('Ik ben ' + this.name);
};

var maurice = new Person('Maurice');
console.log(maurice);

console.log(typeof maurice);

console.log(typeof Person);

console.log(maurice instanceof Person);
console.log(maurice instanceof Cat);

// Person('Jan')

function greet(person) {
  // if (person instanceof Person) {
  if (person && person.name) {
    console.log(person.name);
  }
}

// greet(maurice);

// greet({
//   name: 'Jan'
// });

// greet(null);

// maurice.print();

// maurice.print = function() {
//   console.log('Ik ben echt ' + this.name);
// };

maurice.print();

maurice.whoAmI();

// maurice.prototype = {}

maurice.whoAmI();

Person.prototype.__proto__.whoAmI.call(maurice);

console.log('-----------------------------');

maurice.print();

var p = maurice.print;

// p();

p.apply({ name: 'Apply' });
p.call({ name: 'Call' });

p.call(12);

// function add(x) {
//   return this + x;
// }

// add.call(1, 2)

var p2 = maurice.print.bind(maurice);
p2();

var p3 = maurice.print.bind({ name: 'Bind' });
p3();

p3.call({ name: 'Noop' });
