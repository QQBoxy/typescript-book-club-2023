// 宣告全域變數
declare const jQuery: (selector: string) => any;
// 宣告全域方法
declare function jQuery(selector: string): any;
// 宣告全域類別
declare class Animal {
    name: string;
    constructor(name: string);
    sayHi(): string;
}
// 宣告全域列舉型別
declare enum Directions {
    Up, Down, Left, Right
}
// 宣告（含有子屬性的）全域物件
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}
// 宣告全域型別
interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any;
}
declare namespace jQuery {
    function ajax(url: string, settings?: AjaxSettings): void;
}