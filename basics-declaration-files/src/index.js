"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foo_1 = require("foo");
console.log(foo_1.name);
let myName = (0, foo_1.getName)();
let cat = new foo_1.Animal('Tom');
let directions = [foo_1.Directions.Up, foo_1.Directions.Down, foo_1.Directions.Left, foo_1.Directions.Right];
let options = {
    data: {
        name: 'foo'
    }
};
