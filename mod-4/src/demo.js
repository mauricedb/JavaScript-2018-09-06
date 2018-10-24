"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Calculator = /** @class */ (function () {
    // private element;
    // constructor(element: HTMLPreElement) {
    //   this.element = element;
    // }
    function Calculator(element) {
        this.element = element;
    }
    Calculator.prototype.add = function (x, y) {
        var sum = x + y;
        if (this.element) {
            this.element.textContent = sum.toString();
        }
        return sum;
    };
    Calculator.prototype.subtract = function (x, y) {
        var diff = x - y;
        if (this.element) {
            // this.element.textContent = diff.toString();
            this.element.textContent = JSON.stringify({ diff: diff });
        }
        return diff;
    };
    Calculator.prototype.sayHello = function (_a) {
        var name = _a.name;
        console.log(name);
    };
    Calculator.prototype.doStuff = function (_a) {
        var name = _a.name;
        name.toString;
        // return '';
    };
    return Calculator;
}());
var resultElement = document.getElementById('result');
var calc = new Calculator(resultElement);
var sum = calc.add(1, 2);
console.log('1 + 2 =', sum);
var diff = calc.subtract(10, 5);
console.log('10 - 5 =', diff);
calc.add(3, 4);
// let s = calc.doStuff();
// console.log(calc.element)
sum = 'aaa';
// diff = 'AAA'
// sum.bla()
calc.sayHello({ name: '' });
function test(options) { }
test(true);
test(1);
// test(2);
test('true');
test('false');
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.type = '';
        // drive() {}
        // park() {}
        // fly() {}
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'car';
        return _this;
    }
    Car.prototype.drive = function () { };
    Car.prototype.park = function () { };
    return Car;
}(Vehicle));
var Plane = /** @class */ (function () {
    function Plane() {
        this.type = 'plane';
    }
    Plane.prototype.fly = function () { };
    Plane.prototype.park = function () { };
    return Plane;
}());
function park(v) {
    v.park();
    if (v.type === 'car') {
        v.drive();
        // v.fly();
    }
    else if ((v.type = 'plane')) {
        v.fly();
    }
}
park({ type: 'plane', park: function () { }, fly: function () { } });
// park(new Vehicle())
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var rsp, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, fetch('data.json')];
                case 1:
                    rsp = _a.sent();
                    if (!rsp.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, rsp.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3: return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, null];
            }
        });
    });
}
getData();
//# sourceMappingURL=demo.js.map