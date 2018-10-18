class Calculator {
  // private element;

  // constructor(element: HTMLPreElement) {
  //   this.element = element;
  // }

  constructor(private element: HTMLPreElement | null) {}

  public add(x: number, y: number) {
    const sum = x + y;
    if (this.element) {
      this.element.textContent = sum.toString();
    }
    return sum;
  }

  public subtract(x: number, y: number) {
    const diff = x - y;
    if (this.element) {
      // this.element.textContent = diff.toString();
      this.element.textContent = JSON.stringify({ diff });
    }
    return diff;
  }

  sayHello({ name }: { name: string }) {
    console.log(name);
  }
  doStuff({ name }: { name: string }): void {
    name.toString;
    // return '';
  }
}

const resultElement = document.getElementById(
  'result'
) as HTMLPreElement | null;
const calc = new Calculator(resultElement);
let sum: any = calc.add(1, 2);
console.log('1 + 2 =', sum);
let diff = calc.subtract(10, 5);
console.log('10 - 5 =', diff);

calc.add(3, 4);

// let s = calc.doStuff();

// console.log(calc.element)

sum = 'aaa';
// diff = 'AAA'

// sum.bla()

calc.sayHello({ name: '' });

type Options = boolean | 1 | 0 | 'true' | 'false';

function test(options: Options) {}

test(true);
test(1);
// test(2);
test('true');
test('false');

class Vehicle {
  type: 'car' | 'plane' | '' = '';
  // drive() {}
  // park() {}
  // fly() {}
}

class Car extends Vehicle {
  type: 'car' = 'car';
  drive() {}
  park() {}
}

class Plane {
  type: 'plane' = 'plane';
  fly() {}
  park() {}
}

function park(v: Car | Plane) {
  v.park();

  if (v.type === 'car') {
    v.drive();
    // v.fly();
  } else if ((v.type = 'plane')) {
    v.fly();
  }
}

park({ type: 'plane', park() {}, fly() {} });

// park(new Vehicle())

async function getData() {
  try {
    const rsp = await fetch('data.json');
    if (rsp.ok) {
      const data = await rsp.json();
      return data;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}

getData();
