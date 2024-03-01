interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}
const createArray: CreateArrayFunc = function<T>(
    length: number,
    value: T
): Array<T> {
    const result: T[] = Array(length).fill(value);
    return result;
}
console.log(createArray(3, 'x')); // ['x', 'x', 'x']


// interface CreateArrayFunc<T> {
//     (length: number, value: T): Array<T>;
// }

// const createArray1: CreateArrayFunc<string> = function<T>(
//     length: number,
//     value: T
// ): Array<T> {
//     const result: T[] = Array(length).fill(value);
//     return result;
// }
// console.log(createArray1(3, 'x')); // ['x', 'x', 'x']

// const createArray2: CreateArrayFunc<number> = function<T>(
//     length: number,
//     value: T
// ): Array<T> {
//     const result: T[] = Array(length).fill(value);
//     return result;
// }
// console.log(createArray2(3, 0)); // [0, 0, 0]

export {};