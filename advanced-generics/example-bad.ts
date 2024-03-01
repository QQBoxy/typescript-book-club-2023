function createArray(
    length: number,
    value: any
): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArray(3, 'x')); // ['x', 'x', 'x']

export {};