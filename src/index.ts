/**
 * 将枚举对象转成键值对数组
 * @param e 枚举对象
 * @param labelKey key的名称
 * @param valueKey value的名称
 * @returns
 */
export const enumToKeyValueArr = <T extends Record<string, string | number>>(
  e: T,
  labelKey = "key",
  valueKey = "value"
) => {
  return Object.entries(e)
    .filter(([key, value]) => isNaN(Number(key))) // 过滤掉反向映射
    .map(([key, value]) => {
      return { [labelKey]: key, [valueKey]: value };
    });
};

/**
 * 将枚举对象转成双向映射对象
 * @param e 枚举对象
 * @returns
 */
export const enumToBiMap = <T extends Record<string, string | number>>(
  e: T
): Record<string, string | number> => {
  return Object.entries(e)
    .filter(([key]) => isNaN(Number(key))) // 过滤掉反向映射的数字键
    .reduce((acc, [key, value]) => {
      // 正向映射
      acc[key] = value;
      // 反向映射，确保 value 是字符串类型
      acc[value.toString()] = key; // 转换 value 为字符串
      return acc;
    }, {} as Record<string, string | number>);
};

/**
 * 将枚举对象转成 value 数组
 * @param e 枚举对象
 * @returns value 数组
 */
export const enumToValueArr = <T extends Record<string, string | number>>(
  e: T
) => {
  return Object.entries(e)
    .filter(([key]) => isNaN(Number(key))) // 只保留正向映射
    .map(([, value]) => value);
};

/**
 * 获取枚举的所有 key（去掉反向映射）
 */
export const enumToKeyArr = <T extends Record<string, string | number>>(
  e: T
) => {
  return Object.keys(e).filter((k) => isNaN(Number(k)));
};

/**
 * 判断某个值是否是枚举的 value
 */
export const isEnumValue = <T extends Record<string, string | number>>(
  e: T,
  value: unknown
): value is T[keyof T] => {
  return enumToValueArr(e).includes(value as any);
};

/**
 * 根据 value 找枚举的 key
 */
export const getEnumKeyByValue = <T extends Record<string, string | number>>(
  e: T,
  value: T[keyof T]
) => {
  return Object.entries(e).find(([, v]) => v === value)?.[0] ?? null;
};

/**
 * 按 key 的正则筛选枚举的 value 数组
 */
export const enumFilterValuesByKey = <
  T extends Record<string, string | number>
>(
  e: T,
  regex: RegExp
): (string | number)[] => {
  return Object.entries(e)
    .filter(([key]) => isNaN(Number(key)) && regex.test(key))
    .map(([, value]) => value);
};

/**
 * 按 value 的正则筛选枚举的 key 数组
 */
export const enumFilterKeysByValue = <
  T extends Record<string, string | number>
>(
  e: T,
  regex: RegExp
): string[] => {
  return Object.entries(e)
    .filter(
      ([key, value]) =>
        isNaN(Number(key)) && regex.test(value.toString())
    )
    .map(([key]) => key);
};
