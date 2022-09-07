type UserType = {
  firstName: string;
  lastName: string;
};

const filterItems = (arr: UserType[], searchTerm: string): UserType[] => {
  let result: UserType[] = [];

  Object.values(arr).forEach((el) => {
    if (
      el.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      el.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      result.push(el);
    }
  });

  return result;
};

const users: UserType[] = [
  { firstName: "Fabio", lastName: "Bergmann" },
  { firstName: "John", lastName: "Robert" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Albert", lastName: "Carter" },
];

console.log(filterItems(users, "fa"));
console.log(filterItems(users, "be"));
console.log(filterItems(users, "js"));
