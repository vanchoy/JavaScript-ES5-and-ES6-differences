// Topic: let and const

//------ ES5 -------\\
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

//------ ES6 ------\\
const name6 = 'Jane Smith';
let age = 23;
name6 = 'Jane Miller';

console.log(name6);


////////////////////////////////////////////////////////////////////


// Topic: Block and IIFEs

//----- ES6 ----\\
{
    const a = 1;
    let b = 2;
}

// console.log(a + b);

//----- ES5 -----\\

(function() {
    var c = 3;
})();

console.log(c);

//////////////////////////////////////////////////////////////////

// Topic: Strings in ES6/ES5

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2018 - year;
};


// ES5
console.log('This is ' + firstName + ' ' + lastName + '. ' + 'He was born in ' + yearOfBirth + '. ' + 'Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('Sm'));
console.log(n.includes(' '));
console.log(firstName.repeat(5));
console.log(`${firstName}`.repeat(5));
console.log(`${firstName} `.repeat(5));

////////////////////////////////////////////////////////////////

// Topic: Arrow Functions: Basics

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2018 - el;
});
console.log(ages5);


// ES6

let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;

    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);


///////////////////////////////////////////////////////////////

// Topic: Arrow functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this; // if we dont define the .this keyword it will refer to the global object and it would give undefined

        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() { //here the .this keyword belongs to the box6 object because => function shares it with surroundings, and it will work 
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

// ES6
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {  //here the .this keyword belongs to the global object because => function shares it with surroundings, and it wouldn't work and it will give you undefined 
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box66.clickMe();


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friend with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friend with ${el}`);

    console.log(arr);
};

new Person('Ivan').myFriends6(friends);

/////////////////////////////////////////////////////////////////////////

// Topic: Destructuring

// ES5
var john = ['John', 26];
//var name = john[0];
var age = john[1];


// ES6
const [name, year] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

///////////////////////////////////////////////////////////////////////////////////////////

// Topic: Arrays in ES6

const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes); //transforms the node list that we have in 'boxes' to an array
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue'); 


// ES5
for (var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}

// ES6 
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}
const boxesArr6 = Array.from(boxes); //transforms the node list that we have in 'boxes' to an array
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue'); 


// ES5
for (var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}

// ES6 
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}


// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

/////////////////////////////////////////////////////////////////////////////

// Topic: Spread Operator

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5 
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages); // Apply method will take the array(ages) and then call the function(addFourAges) using the elements of the array as arguments
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages); // this is the same thing as sum2 which is written in ES5; '...' is the new operator called spread operator, and we can use it to call a function using data from an array as arguments
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Anna'];
const bigFamily = [...familySmith, ...familyMiller]; // So the spread operator expand this array into the three single elements and takes them out of the array(familySmith) and puts them here, and the same for array(familyMiller)
console.log(bigFamily);
const bigFamily2 = [...familySmith, 'Lily', ...familyMiller]; // You can also add more elements into this array;
console.log(bigFamily2);

// We can also use the spread operator in Nodes and Nodelist as well
const h = document.querySelector('h1'); // The 'h1' is a Node because it is a 'querySelector'
const boxes = document.querySelectorAll('.box'); // querySelectorAll is a NodeList
const all = [h, ...boxes];
// Now we need to transform this nodelist ('all') into an array and then we can loop through it with the forEach method
// Array.from(all) -> this returns an array
Array.from(all).forEach(cur => cur.style.color = 'grey');


//////////////////////////////////////////////////////////////////////////////////

// Topic: Rest Parameters 

// Rest Parameters allows us to pass an arbitary number of arguments into a function, and use these arguments in that function
// The spread operator takes an array, and transforms it into single values, while the Rest Parameters receive a couple of single values and transforms them into an array when we call a function with multiple parameters


// ES5
// If we want to receive an undefined number of arguments, then we simply don't define any parameters for our function, and then just use the arguments keyword. The argmunets' keyword, or variable, is very similar to '.this' variable and it's a variable that each execution context gets access to.
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= 18);
    });
}

isFullAge5(1990, 2005, 1965);
isFullAge5(1990, 2005, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {    // '...' is the Rest parameter
    years.forEach(cur => console.log((2018 - cur) >= 18));
}
isFullAge6(1990, 2005, 1965);


// The biggest difference between the spread operator and the rest parameter is actually the place in which we use each of them
// The spread operator is used in the function call, while the rest parameter is used in the function declaration to exact an arbitary number of parameters

// ES5
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1); // at position 1 it will start to copy our array, and so like this we can exclude the first argument

    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= limit);
    });
}
isFullAge5(21, 2005, 1965);
isFullAge5(1990, 2005, 1965, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {    // '...' is the Rest parameter
    years.forEach(cur => console.log((2018 - cur) >= limit));
}
isFullAge6(16, 1990, 2005, 1965);

/////////////////////////////////////////////////////////////////////////////////////

// Topic: Default Parameters
// We use default parameters whenever we want one or more parameters of a function to be preset, so we want them to have a default value

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish'); // this is going to overwrite our default parameters of our function constructor


// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish'); 

//////////////////////////////////////////////////////////////////////////////////////

// Topic: Maps
// There is a new data structure in ES6 called 'map' - So, a map is a new key-value data structure in ES6, and one of the big differences is that in maps, we can use anything for the keys. In objects we are limited to strings, but in maps we can use any kind of primitive value like numbers, strings or booleans, and we can even use functions or objects as keys.

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES2017');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong answer! Please, try again :)');

console.log(question.get('question'));
console.log(question.size);

// We can set data in our map, we can get data, but we can also delete data and check if data is there, or if a certain key is there.

if (question.has(4)) {
    //question.delete(4);
    console.log('Answer 4 is here - ' + question.get(4));
}
//question.clear();

// Set, get, has, delete, clear are the most basic methods that we can use to manipulate maps.
// Another cool thing is that maps are actually iterable. This means that we can loop through them, which is another thing that we cannot do with objects.
// The first way of looping through a map is to use the 'forEach' method, and this means that each map gets the 'forEach' method such as arrays do, and this means that the 'forEach' method is in the prototype property of the map function constructor, and so all of the maps inherit that method and we can then use it.

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {      //this also works for arrays
    console.log(`This is ${key}, and it's set to ${value}`);
};

for (let [key, value] of question.entries()) {      //this also works for arrays
    if (typeof(key) === 'number') {                 //typeof is a build-in JS function to check the type of a variable
        console.log(`Answer ${key}:${value}`);
    }
};

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct'))); // instead of writing an if-else statement here


// Why maps are better than objects to create hash maps?
// - First reason is because we can use anything as keys, which opens a lot of possibilities as we just saw with this example.
// - Second, because maps are iterable, and making it very easy to loop through them and to manipulate data with them.
// - Three, because it's really easy to get the size of a map using the 'size' property.
// - Four, because we can add and remove data from a map.
// ~ So, all of these are strong arguments in choosing maps over objects, if we want to build hash maps.


//////////////////////////////////////////////////////////////////////////////////////

// Topic: Classes
// Classes are synthetic sugar of the way we do prototype inheritance in JavaScript, and that means that classes simply make it easier to implement inheritance and to create objects based on blueprints.
// In ES5, these blueprints are called function constructor, and we add methods to their prototype properties in order to make all the instances created through a function constructor inherit these methods.

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
    // All of the classes have to have the constructor method!
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    };

    // If we want to add a method to the class we add it here inside the class
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    };

    // This is a static method and it's not going to be inherited by the john6. 
    static greeting() {
        console.log('Hey there');
    };
}
// This is how we call static methods
Person6.greeting();

const john6 = new Person6('John', 1990, 'teacher');

// In Classes we can also add static methods. Those static methods are methods that are attached to the class, but not inherited by the class instances, so by objects that we create through that class. 

// Class definitions are not hoisted, so unlike function constructors, we need first to implement a class, and only later in our code we can start using it.
// We can only add methods to classes, but not properties. That's not a problem at all, because inheriting properties through object instances is not a best practice anyway. That's why this rule is now really enforced here in classes.


///////////////////////////////////////////////////////////////////////////////////////

// Topic: Classes with Subclasses
// Implementing inheritence between classes using subclasses

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

// Object.create allows us to manually set the prototype of an object, and we want the prototype of the athlete to be the prototype of the person, so they become connected.
Athlete5.prototype = Object.create(Person5.prototype);
// So, now the two function constructors are connected, and the prototype chain should work just fine.


// This is a method which is very specific only to the athletes, and so all the instances are going to inherit this method if they are athlete instances. The Person5 instances are will not inherit this method, because it is only in Athlete5 prototype property.
// This method will increase the medals of the athlete.
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// Person5 is the superclass, and the Athlete5 is the subclass!
// We can also set methods on the prototype property of the Athlete5 function constructor.


// ES6
class Person6 {
    // All of the classes have to have the constructor method!
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    };

    // If we want to add a method to the class we add it here inside the class
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    };

};

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    };

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    };
};

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
