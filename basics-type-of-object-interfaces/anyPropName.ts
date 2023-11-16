export interface Person {
    name: string;
    age?: number;
    [propName: string]: any; // 任意屬性
}
let tom: Person = {
    id: 1,
    name: 'Tom',
    gender: 'male'
};