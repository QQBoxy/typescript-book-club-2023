export interface Person {
    name: string;
    age?: number; // 可選屬性
}
let tom: Person = {
    name: 'Tom'
};
let otter: Person = {
    name: 'Otter',
    age: 3
};
