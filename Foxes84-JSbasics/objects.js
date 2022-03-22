// JavaScript Objects!

/*
JavaScript is not traditionally an object-oriented programming language
It is possible to write object-oriented javascript codef
There are two main types of object - the two are related but are slightly different to create
1. the Object - aka the equivalent to a python dictionary & JSON data
2. Object prototypes - the equivalent to a python object class
    - essentially making a class-based object although in JS that can be done with a class or a function
*/

// Simple object
// just like a python dictionary except the keys (if strings) dont need to be in quotation marks
let animal = {
    name: 'Fennec Fox',
    age: 14,
    color: 'sand',
    habitat: 'desert'
};

// accessing properties (what would be keys/attributes in python)
// can be done either of the two pythonic ways
// bracket notation
console.log(animal['name']);
console.log(animal['age']);

// dot notation
console.log(animal.name);
console.log(animal.age);

// adding a key-value pair is the same
animal['paws'] = 4;
animal.ears = 'large';

// deleting
delete animal.paws;
console.log(animal);

// Complex JavaScript Object
let animals = {
    foxes: {
        'Fennec Fox': {
            habitat: 'desert',
            food: ['scorpions', 'mealworms', 'small rodents']
        },
        'Tibetan Fox': {
            habitat: 'steppe'
        }
    },
    whales: ['blue whale', 'orca', 'sperm whale', 'humpback whale', 'beluga'],
    humans: 'Jack'
};

// access 'scorpions' from Fennec Fox's food
console.log(animals['foxes']['Fennec Fox']['food'][0]);
// same thing but with dot notation where possible
console.log(animals.foxes['Fennec Fox'].food[0]);

console.log('\n\nLooping Objects:')
/* Looping with JS objects 
    Much the same as looping with a python dictionary
*/

// just like python for in loop in a dictionary
for (property in animal){
    // we must use bracket notation here - we want the animal property called the value of the property variable NOT the animal property 'property'
    console.log(property, animal[property]); 
}

// just like python's dict.keys() and dict.values()
// we have JS:
// Object.keys(<object>)
// Object.values(<values>)
// gives an array of either the keys (properties) or values from an object
console.log(Object.keys(animal));
console.log(Object.values(animal));

// looping object values
// use Object.values() then loop like any other array
let vals = Object.values(animal);
for (let i=0; i<vals.length; i++){
    console.log(vals[i]);
}

console.log('\n\nCustom Object Prototypes:')
/*
Custom objects in JS: much like Python's class-based objects
3 ways to write them :)
*/

// function-based object - least commonly used nowadays - ES5 syntax
// this in JS = self in Python
function Dog(name, breed, color, paws=4){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.paws = paws;

    //object method - create a function inside of this function
    this.printInfo = function(){
        console.log(`${this.name} is a ${this.breed} with ${this.paws} paws. They are ${this.color}.`);
    };
}
// creating an instance of our Dog - need the new keyword
// let <var_name> = new <object_name>(<parameters>);
let my_dog = new Dog('Sir Henry James of Pailey', 'English Springer Spaniel', 'black and white');
my_dog.printInfo();

// class based object
class DogC {
    constructor(name, breed, color, paws=4){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.paws = paws;
    }

    printInfo(){
        console.log(`${this.name} is a ${this.breed} with ${this.paws} paws. They are ${this.color}.`);
    }
}

let class_based_dog = new Dog('Sir Wesley Charles of Nottingham', 'English Springer Spaniel', 'black and white');
class_based_dog.printInfo();

/* JavaScript Inheritance
inheritance is an object-oriented programming concept
so JS inheritance is usually used with our OOP-like syntax aka the class-based object
*/
class Springer extends Dog{
    constructor(name, breed, color, paws=4){
        super(name, breed, color, paws);
        this.jumps = 'high and often';
        this.fast = 'fast';
    };

    zoom(){
        this.fast = 'very ' + this.fast;
    };
}

let a_springer = new Springer('Tiger', 'English Springer Spaniel', 'liver and white');
a_springer.printInfo();
a_springer.zoom();
a_springer.zoom();
a_springer.zoom();
console.log(a_springer.fast);


// function-based object with arrow function for methods
function DogArrow(name, breed, color, paws=4){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.paws = paws;

    //object method - create a function inside of this function
    // this could be an arrow function
    this.printInfo = () => {
        console.log(`${this.name} is a ${this.breed} with ${this.paws} paws. They are ${this.color}.`);
    };
}
let another_dog = new DogArrow('Cloud', 'Samoyed', 'snow white');
another_dog.printInfo();


console.log('\n\nCallbacks:')
/* JavaScript Callbacks
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that are passed other functions as parameters are called 'higher-order functions'
    and any function passed as input to another function is a 'callback function'

    Why do we need this and how does this differ from python?
    - while a callback function is possible and is used in python (map, filter, custom decorators, etc.)
        - it is not as commonly used as in JS

    JavaScript does not execute in a linear single-thread manner. 
    Aka the computer does not read the code from top down stopping to do any work that needs to be done along the way (like Python does)
    JS will continue to read the code while passing any tasks that need to be done off to the 'Event Loop'
    - the JS event loop is responsible for processing functions etc. anything that happens outside of the main thread of execution
    Unlike Python (and Java), JavaScript is an event-driven language. Instead of waiting for a response to an initial action before moving on,
    JavaScript will continue to listen for new events/actions while it processes the previous events in the background
    This can lead to order of execution issues
*/
let first = () => {
    // artificial delay to simulate a longer process like an API call
    setTimeout(()=>{console.log(1);}, 3000);
}

let second = () => {
    console.log(2);
}

// call first THEN call second
first();
second();
// console log shows 2 then 1 because of event loop interaction

/* 
One potential solution to the event loop execution issues is callbacks
We can tell a function that it should run as a callback to another function
If there is some action/event required to progress the initial function, the callback will wait 
as it's execution occurs 'within' the execution of the higher-order function
*/

let attendClass = (subject, callback) => {
    alert(`Attending ${subject} class!`); // this example will only work through the browser because of alert()
    callback();
}

let endClass = () => {
    console.log('Class is over!');
}

/* There is a problem with the callback 'solution' though..... Callback Hell
    function1( () => {
        function2( ()=> {
            function3( ()=>{
                function4( ()=>{
                    'ugh'
                })
            })
        })
    })
*/

console.log('\n\nArray Methods Cont:');
/*
An introduction to callback functions with:
.map(), .filter(), .reduce()
*/
let myFunc = (player) => {return `${player} plays for Manchester City in the English Premier League.`}
// the role of map is to execute a callback function on each item within an array
// array.map(<callbackfn>)
let players = ['Kevin De Bruyne', 'Phil Foden', 'Raheem Sterling', 'Rodri', 'Joao Cancelo', 'Ilkay Gundogan', 'Fernandinho']
let p2 = players.map(myFunc);
console.log(p2);
// the role of filter is to filter an array based on a callback function
let fplayers = players.filter((n) => {return n.includes('F')});
console.log(fplayers);
// the role of reduce is to 'boil down' an array to a single value... based on a callback function
let prices = [3.99, 5.18, 2398, 3932, 39.99, 978, 32.53]
let total = prices.reduce((accumulator, value)=>{return accumulator + value})
console.log(total);

console.log('\n\nPromises:')
// Solving Callback Hell with Promises

// a simple promise implementation
// a promise based answer to the question "Is this number even or odd?"

let isEvenNumber = (num) => {
    return new Promise((resolve, reject)=>{
        if (num%2==0){
            resolve(num);
        } else {
            reject(num);
        }
    })
}

// call the function and use the Promise using .then() and .catch()
// .then() method represents resolving a Promise
// .catch() method represents rejecting the Promise
isEvenNumber(2)
.then( (result) => {
    console.log(`Even Number ${result}.`);
}).catch( (result) => {
    console.log(`Odd Number ${result}.`);
});

// Another, more modern approach to Promises
// the async-await syntax
// allows us to define a function as an asynchronous function
// aka one that should happen outside of the main event loop
// this asynchronous function can then wait for the results/execution of other functions
// such that proper event ordering is maintained

// an example of when async/await might be valuable:
// some long modification process (in this case one that is contrived)
// this is addition but it is designed to take 2 seconds
let increaseValueButSlowly = (base, increase) => {
    return new Promise( (resolve) => { setTimeout( ()=> resolve(base+increase), 2000)});
};

// add the async keyword to make this function asynchronous
// tell new_salary to await the results of the callback
let increaseSalary = async (salary, raise) => {
    let new_salary = await increaseValueButSlowly(salary, raise); // await the results of this promise before continuing
    console.log(`New salary: ${new_salary}`);
}

increaseSalary(40, 2);