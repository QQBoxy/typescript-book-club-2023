"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
;
console.log(Colors["Red"] === 0); // true
console.log(Colors["Green"] === 1); // true
console.log(Colors["Blue"] === 2); // true
console.log(Colors[0] === "Red"); // true
console.log(Colors[1] === "Green"); // true
console.log(Colors[2] === "Blue"); // true
