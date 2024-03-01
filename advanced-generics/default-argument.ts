function createArray<T = string>(length: number, value: T): Array<T> {
    const result: T[] = Array(length).fill(value);
    return result;
}

export {};