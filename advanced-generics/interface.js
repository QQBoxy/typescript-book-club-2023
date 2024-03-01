"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createArray = function (length, value) {
    const result = Array(length).fill(value);
    return result;
};
console.log(createArray(3, 'x')); // ['x', 'x', 'x']
