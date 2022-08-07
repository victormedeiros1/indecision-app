// const add = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// console.log(add(55, 49));

// const user = {
//   name: 'Victor',
//   cities: ['Caicó', 'Natal', 'Touros'],
//   printPlacesLived: function () {
//     return this.cities.map((city) => city + ' in RN');
//   },
// };

// console.log(user.printPlacesLived());

const multiply = {
  numbers: [1, 2, 3, 5, 6],
  multiplyBy(n) {
    return this.numbers.map((number) => n * number);
  },
};

console.log(multiply.multiplyBy(50));
