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
