"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(swap([7, 'seven'])); // ['seven', 7]
