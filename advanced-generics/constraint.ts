// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

export {};