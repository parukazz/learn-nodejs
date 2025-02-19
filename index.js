console.log("Hello, world!");

// Function
function sayHello(name) {
  return `Hello, ${name}!`;
}
console.log(sayHello("Paruk"));

// Arrow Function
const sayHello2 = (name) => `Hello, ${name}!`;
console.log(sayHello2("Paruk"));

// Object - Arrays
const user = {
  name: "Yuga",
  age: 25,
  isAdmin: true,
};

console.log(user.name);
console.log(user["age"]);
console.log(user["isAdmin"]);

const numbers = [12, 13, 20];
console.log(numbers[0]);
numbers.push(40);
console.log(numbers);

// Loop
numbers.forEach((number) => {
  console.log(number);
});

// Using promises - API calls
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data Loaded!"), 2000);
  });
};

fetchData().then((data) => console.log(data));

// Using async/await - API calls
const fetchAPI = async () => {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("API Data Loaded!"), 2000)
  );
  console.log(data);
};
fetchAPI();

// JSON - Convert from Object
const jsonString = JSON.stringify(user);
console.log(jsonString);

// JSON - Convert to Object
const user2 = JSON.parse(jsonString);
console.log(user2);
console.log(user2.name);
console.log(user2.isAdmin);
