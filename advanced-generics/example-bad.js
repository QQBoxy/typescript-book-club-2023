"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createArray(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArray(3, 'x')); // ['x', 'x', 'x']
