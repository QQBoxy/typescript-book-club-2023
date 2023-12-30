enum Colors {Red, Green, Blue};

console.log(Colors["Red"] === 0); // true
console.log(Colors["Green"] === 1); // true
console.log(Colors["Blue"] === 2); // true

console.log(Colors[0] === "Red"); // true
console.log(Colors[1] === "Green"); // true
console.log(Colors[2] === "Blue"); // true

export {};