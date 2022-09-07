const joinArrayRemoveDuplicate = (arrA: string[], arrB: string[]): string[] => {
  const newArr = [...arrA, ...arrB];

  return [...new Set(newArr)];
};

console.log(
  joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"])
);
// ["apel", "anggur", "lemon", "leci", "nanas"]

console.log(
  joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"])
);
// ["samsung", "apple", "sony", "xiaomi"]

console.log(
  joinArrayRemoveDuplicate(
    ["football", "basketball"],
    ["basketball", "football"]
  )
);
// [“football”, “basketball”]
