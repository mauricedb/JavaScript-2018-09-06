function test() {
  //   const x = 1;
  //   console.log(x);
  //   //   x = 2;
  //   console.log(x);

  //   const person = {
  //     name: 'Maurice'
  //   };

  //   Object.freeze(person);
  //   console.log(person.name);

  //   person.name = 'Martine';
  //   console.log(person.name);

  //   //   person = {
  //   //       name: 'Jan'
  //   //   }

  //   const y = 1;
  //   y.name = 'Kan dit?';
  //   console.log(y.name);
  //   console.log(y.length);

  //   function Animal(name) {
  //     this.name = name;
  //   }

  //   class Animal {
  //     constructor([name]) {
  //       this.name = name;
  //       console.log(arguments);
  //     }

  //     set name(value) {
  //       if (!value) throw new Error('Moet een naam hebben');

  //       this._name = value;
  //     }
  //     get name() {
  //       return this._name;
  //     }

  //     sleep() {
  //       console.log('The animal ' + this.name + ' is sleeping');
  //     }
  //   }

  //   class Cat extends Animal {
  //     constructor(...args) {
  //       super(args);
  //       this.catName = name;
  //       this.age = args[1];
  //       console.log(arguments);
  //     }

  //     sleep() {
  //       console.log('The cat ' + this.name + ' is sleeping');
  //       super.sleep();
  //     }
  //   }

  //   const zorro = new Cat('Zorro', 12);
  //   console.log(zorro.name, zorro.age);
  //   console.log(typeof zorro);
  //   console.log(zorro instanceof Animal);
  //   zorro.sleep();

  //   //   zorro.name = '';
  //   zorro._name = 0;
  //   zorro.sleep();

  //   //   Animal('Oops');
  //   //   Animal('Zorro');

  class Demo {
    constructor() {
      this.firstName = 'Maurice';
      this.lastName = 'de Beijer';

      this.print = () => (console.log('debug'), console.log(this.firstName));
    }
  }

  const o = new Demo();
  o.print();

  const fn = o.print;
  fn();

  const person = {
    firstName: 'Maurice',
    lastName: 'de Beijer',
    adres: {
      city: 'Zoetermeer'
    }
  };

  function print({ firstName, adres: { city: stad } }) {
    Array.from(arguments).forEach(x => x);
    console.log(firstName, stad);
  }
  print(person);

  Array.from(person).forEach(console.log);
  console.log(Array.from(person));
  console.log(Array.from('abc'));
}

// test();

// function getData() {
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then(rsp => rsp.json())
//     .then(data => data.value)
//     .then(console.log)
//     .catch(console.log);
// }

async function getData() {
  try {
    const rsp = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await rsp.json();

    let joke;

    if (data.value) {
      joke = data.value;
      console.log(joke);
    } else {
      console.log('geen joke');
    }

    return joke;
  } catch (e) {
    console.warn(e);
  }
}

function doStuff() {
  getData().then(console.log);
}

// doStuff();

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function moreStuff() {
  console.log('start');
  await sleep(5000);
  console.log('end');
}

// moreStuff();

import DemoDemo, { y as z, zzz } from './utils.js';

const d = new DemoDemo('Maurice');
d.print();

console.log(z);

console.log(zzz);

console.log('%cHallo', 'color:red; font-size: 100px;');

console.group('Hallo');
console.log('een bericht');
console.groupEnd();
console.log('een bericht');

console.groupCollapsed('Hallo');
console.log('een bericht');
console.groupCollapsed('Hallo');
console.log('een bericht');
console.groupCollapsed('Hallo');
console.log('een bericht');
console.groupEnd();
console.groupEnd();
console.groupEnd();
