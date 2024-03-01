function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

console.log(swap([7, 'seven'])); // ['seven', 7]

export {};