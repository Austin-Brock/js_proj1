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
