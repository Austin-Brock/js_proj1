// #1
function double(n) {
    return n * 2;
}

function triple(n) {
    return n * 3;
}

//#2
const square = n => n * n;

const increment = n => n + 1;

//#4
function mapThis(array, callback) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        resultArray.push(callback(array[i]));
    }
    return resultArray;
}

//#5
function updateEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
    // No return statement because the array is modified in place
}

//#6
function updateEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
    // No return statement because the array is modified in place
}

//#7
const youngPeople = people.filter(person => person.age <= 25)
                          .map(person => ({
                            name: person.firstName + ' ' + person.lastName,
                            email: person.email
                          }));

console.log(youngPeople);

//#8
const positiveSum = nums.filter(number => number > 0)
                        .reduce((sum, current) => sum + current, 0);

console.log(positiveSum);

const numbers = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const nums = [2, -30, 50, 20, -12, -9, 7];
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

console.log(mapThis(numbers, double)); 
console.log(mapThis([1,2,3], double)); 
console.log(mapThis([5,10,5], triple)); 
console.log(mapThis([1,2], square));   

myarray = [2,3,4];
updateEach(myarray, increment);
console.log(myarray); 
updateEach(myarray, square);
console.log(myarray); 

updateEach(numbers,triple);
console.log(numbers); 

console.log(youngPeople);

console.log(positiveSum);

//TEST
console.log(mapThis(numbers, double)); // 66, 24, 40, ...
console.log(mapThis([1,2,3], double)); // 2,4,6
console.log(mapThis([5,10,5], triple)); // 15, 30, 15
console.log(mapThis([1,2], square)); // 1,4


myarray = [2,3,4];
updateEach(myarray, increment);
console.log(myarray); // 3,4,5
updateEach(myarray, square);
console.log(myarray); // 9, 16, 25


updateEach(numbers,triple);
console.log(numbers); // 99, 36, 60, ...

console.log(youngPeople);
[
  {name: 'Jane Poe', email:'jane@gmail.com'},
  {name: 'Sara Soe', email:'sara@gmail.com'},
  {name: 'Jose Koe', email:'jose@gmail.com'}
]

console.log(positiveSum); // 79