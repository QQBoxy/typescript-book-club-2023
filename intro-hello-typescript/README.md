
# Intro - Hello TypeScript

## 安裝 tsc

```bash
npm install -g typescript
```

## 初始化

> 記得先切換到開發目錄

```bash
tsc --init
```

## 建立範例程式

**hello.ts**
```javascript
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```

## 使用 tsc 編譯

編譯目錄下全部的 *.ts 檔案

```
tsc
```

指定編譯的 ts 檔案

```
tsc hello.ts
```

## 執行結果

```bash
qqboxy@QQBoxydeMacBook-Pro intro-hello-typescript % tsc --init

Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
qqboxy@QQBoxydeMacBook-Pro intro-hello-typescript % tsc
qqboxy@QQBoxydeMacBook-Pro intro-hello-typescript % node hello.js
Hello, Tom
qqboxy@QQBoxydeMacBook-Pro intro-hello-typescript % 
```