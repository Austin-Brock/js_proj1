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
