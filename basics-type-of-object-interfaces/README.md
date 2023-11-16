# Basic - Type of object interfaces

## Examples

```typescript
interface Person { // 定義 Person 介面
    name: string; // 名字、年齡 是 Person 的形狀
    age: number;
}
// 變數 tom 須符合 Person 的形狀
let tom: Person = {
    name: 'Tom',
    age: 25
};
```

```typescript
interface Person {
    name: string;
    age: number;
}
let tom: Person = {
    name: 'Tom'
};
let otter: Person = {
    name: 'Otter',
    age: 3,
    gender: 'female'
};
```

```typescript
interface Person {
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
```

```typescript
interface Person {
    name: string;
    age?: number;
    [propName: string]: any; // 任意屬性
}
let tom: Person = {
    id: 1,
    name: 'Tom',
    gender: 'male'
};
```

```typescript
interface Person {
    name: string;
    age?: number; // number 不在 string 型別的子集
    [propName: string]: string; // 任意屬性的 string 型別
}
```

```typescript
interface Person {
    readonly id: number;
    name: string;
}
let tom: Person = {
    id: 89757,
    name: 'Tom',
};
tom.id = 9527; // 跳唯讀錯誤
// readonly.ts:9:5 - error TS2540: Cannot assign to 'id' because it is a read-only property.
```

```typescript
interface Person {
    readonly id: number;
    name: string;
}
// 沒有給 id 賦值
let tom: Person = {
    name: 'Tom',
};
// readonly.ts:5:5 - error TS2741: Property 'id' is missing in type '{ name: string; }' but required in type 'Person'.
```

```typescript
interface Person {
    name: string;
}
interface Person {
    age: number;
}
let tom: Person = {
    name: 'Tom',
    age: 25
};
```