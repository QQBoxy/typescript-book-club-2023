enum Color {Red, Green, Blue = "blue".length};

// enum Color {Red = "red".length, Green, Blue};
// color.ts:1:33 - error TS1061: Enum member must have initializer.
// color.ts:1:40 - error TS1061: Enum member must have initializer.

export {};