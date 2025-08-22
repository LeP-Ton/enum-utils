# Enum Utils

一个用于处理 TypeScript 枚举的工具库，提供了一系列便捷的方法来操作和转换枚举数据。

## 功能列表

- [enumToKeyValueArr](file:///Users/didi/Documents/program/enum-utils/src/index.ts#L7-L17) - 将枚举转换为键值对数组
- [enumToBiMap](file:///Users/didi/Documents/program/enum-utils/src/index.ts#L24-L36) - 将枚举转换为双向映射对象
- [enumToValueArr](file:///Users/didi/Documents/program/enum-utils/src/index.ts#L43-L49) - 提取枚举的所有值组成数组
- [enumToKeyArr](file:///Users/didi/Documents/program/enum-utils/src/index.ts#L54-L58) - 提取枚举的所有键（排除反向映射）
- [isEnumValue](file:///Users/didi/Documents/program/enum-utils/src/index.ts#L63-L68) - 判断某个值是否是枚举的有效值
- [getEnumKeyByValue](file:///Users/didi/Documents/program/enum-utils/src/index.ts#L73-L78) - 根据枚举值查找对应的键

## API 说明

### `enumToKeyValueArr(e, labelKey?, valueKey?)`

将枚举对象转换成键值对数组。

**参数:**
- `e`: 枚举对象
- `labelKey`: 自定义键字段名（默认为 "key"）
- `valueKey`: 自定义值字段名（默认为 "value"）

**示例:**
```ts
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

enumToKeyValueArr(Status);
// [{ key: 'Active', value: 'ACTIVE' }, { key: 'Inactive', value: 'INACTIVE' }]
```

### `enumToBiMap(e)`

将枚举对象转换成双向映射对象，支持通过键或值互相查找。

**参数:**
- `e`: 枚举对象

**示例:**
```ts
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

const biMap = enumToBiMap(Status);
// { Active: 'ACTIVE', ACTIVE: 'Active', Inactive: 'INACTIVE', INACTIVE: 'Inactive' }
```

### `enumToValueArr(e)`

提取枚举的所有值组成数组。

**参数:**
- `e`: 枚举对象

**示例:**
```ts
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

enumToValueArr(Status);
// ['ACTIVE', 'INACTIVE']
```

### `enumToKeyArr(e)`

获取枚举的所有键（排除反向映射）。

**参数:**
- `e`: 枚举对象

**示例:**
```ts
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

enumToKeyArr(Status);
// ['Active', 'Inactive']
```

### `isEnumValue(e, value)`

判断某个值是否是枚举的有效值。

**参数:**
- `e`: 枚举对象
- `value`: 待检查的值

**示例:**
```ts
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

isEnumValue(Status, 'ACTIVE'); // true
isEnumValue(Status, 'UNKNOWN'); // false
```

### `getEnumKeyByValue(e, value)`

根据枚举值查找对应的键。

**参数:**
- `e`: 枚举对象
- `value`: 枚举值

**示例:**
```ts
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

getEnumKeyByValue(Status, 'ACTIVE'); // 'Active'
getEnumKeyByValue(Status, 'UNKNOWN'); // null
```