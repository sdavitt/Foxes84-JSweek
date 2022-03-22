// Single-line comments in JavaScript are written with two slashes instead of a #

/*
Multi-line comments are written
with a slash-star to start
and a star-slash to end
*/

/*
Hello, world! in JavaScript - we'll be looking at JavaScript syntax basics today and tomorrow
What that primarily means is we won't really be discussing applying JavaScript in web-based projects
or some JavaScript specifics of how the language functions
rather we'll be focusing on familiarizing ourselves with the syntax and structure of the language
so that we can more easily learn and understand its unique properties later this week.
The way we'll approach that learning is through translation of the Python syntax we already know.
Most programming languages operate with the same logic.
Knowing one programming language makes learning a second far easier.
Just like it's easy to learn French if you already know Spanish- it's easier to learn JavaScript if you already know python.
Side note: JavaScript is sometimes called the 'wild west' of programming languages-
    where Python has a design philosophy of 'there should be one and only one obvious way to do something',
    the JavaScript design philosophy is more along the lines of 'if you can think of it, it should work- theres 27 ways to do anything'
    - you don't need to learn all 27 ways of doing something
    - just pick one that you like and stick with it
*/

// console.log() is the JavaScript equivalent to Python's print()
console.log('Hello, Foxes!');
console.log("Let's learn some JavaScript!");

/*
Differences in overall structure between Python and JavaScript:
Core difference: Python is an interpreted langauge while JavaScript is a compiled language
    - What does that even mean?
    - An interpreted language is first read by the computer when the code runs aka all of the work is done AT RUNTIME
        - code is read from the top down, what we see is what the computer sees (kind of)
    - A compiled language is first read by a compiler which translates then the computer reads the translation
        - aka some work is done at the compile stage - NOT all work is done AT RUNTIME
    - Why does this matter?
        - 1. what we see isn't what the computer sees
            - because some work is done at the compile stage before the computer executes our code, we see some parts of our JS differently than our computer does
        - 2. (Doesn't matter for making things work) Compiled languages are generally moderately faster at runtime than interpreted languages
            - because the computer has had a chance to do some work before runtime
            - as a generalization the same code written in a compiled language vs. in an interpreted lanaguage (ex. Java vs. Python)
                - the compiled language will run the code slightly faster than the interpreted language
                - again this is a gross generalization
    - Java? JavaScript? Same thing, right? NO
        - Java and JavaScript have just about as much to do with eachother as the food ham and the animal hamster
        - They're totally unrelated
        - JavaScript was named JavaScript as a marketing ploy because Java was wildly popular at the time
        - JavaScript should have been named something else as the two languages are entirely different
    - How does this affect my code?
        - In python, we're used to lines of code and code blocks being controlled by indentation
            - the enter key means a new line
            - indenting a line means it is inside of a code block
        - Because JS is compiled, what the computer sees is not what we see
            - in most scenarios, indentation has NO EFFECT on our javascript code
                - part of the compile stage of JS is the removal of all whitespace as the computer doesn't need it
            - ok... we still need control of code blocks and lines
                - in JS - a line of code ends with a ;
                    - semicolons are not always strictly necessary
                        - however a properly placed semicolon won't break anything
                    - Use your semicolons
                    - there are far more scenarios where a missing semicolon will break your code than having a semicolon would break your code
                - code blocks in JS are controlled by {}
                    - any indentation is just for readability
*/

// Variable definition in javascript is very similar to python
// we just have to tell the computer what we're doing before we do it
// the var keyword tells the computer we're defining a variable

// Python core data types and their equivalents in JS:
    // python string == string JS
    // python boolean == boolean JS
    // python int ==/!= numeric JS
    // python float ==/!= numeric JS
// core difference: python has separate decimal (float) and integer (int) types
// JS has one type for numbers (numeric)

var name1 = 'Sam';
// strings in javascript are the same as strings in python
    // just like python strings are immutable

// displaying that variable in our console is the same as python
// python: print(name)
console.log(name1);

var num1 = 4;
console.log(num1);
var num2 = 3.1415;
console.log(num2);

// checking datatype - done with the typeof keyword
// typeof <varname>
console.log(typeof num1);
console.log(typeof num2);

// boolean values are similar - just not capitalized
// true and false
var bool1 = true;
console.log(bool1, typeof bool1);

// Our two primary data structures in python: list and dictionary
// Their JS equivalents: array and object
// Array
var js_arr = [num1, num2, bool1, name1];
console.log(js_arr);

// object - just like a dictionary
var js_obj = {'a_key': 'a_value'};
console.log(js_obj);

/* core concept difference: variable declaration
 so far, we've exclusively talked about variable DEFINITION
 variable declaration is a separate process that falls under the umbrella of telling the computer what you're about to do before you do it
 - in python, variable declaration doesn't really exist
    - we cannot declare a variable without defining it (giving it value/setting it equal to something)
    - in JS, we can separately declare a variable
        - when a variable is declared in JS, it is often defined at the same time, as seen with all of our variables created above
        - however, we can leave a variable undefined in which case its value is predictably undefined
*/
// declaration without definition
// var <name of variable>
var some_variable;
console.log(some_variable);

// definition without declaration? bad practice (this is technically allowed because of variable hoisting but don't do it, declare your variables)
// new_variable = 5;

// VARIABLE HOISTING? what is that
// all variable declarations are pulled to the top of your code when it is compiled
// advantage: you will pretty much never get a variable undeclared/undefined ERROR in javascript
// disadvantage: you will never get a variable undefined ERROR... your variable will just have value undefined
// see example.py file for python comparison
console.log('\nHoisting Example:');

console.log(hoisted_variable);
var hoisted_variable = 'Fennec Fox';
console.log(hoisted_variable);

// 1. Declare the variable 2. Define the Variable
// 3. Redeclaration? 4. Redefinition?
var hoisted_variable; // redeclaration - this variable has already been declared
hoisted_variable = 'Arctic Fox'; // redefinition without redeclaration
console.log(hoisted_variable);
// if you do this, you will run into weird behavior and/or things breaking for seemingly no reason
// i am improperly using variable declaration and definition
// proper use:
    // declare a variable only once
    // define it after you declare it (or at the same time)
    // redefine it without redeclaring it
// is there a way to make remembering those rules easier? Yes!
// ECMAScript - a standardization of how JavaScript SHOULD be written for best practices
// current iteration: ES6
    // additional rules and recommendations for how you write your JavaScript
    // including a better way to handle declaration and definition of variables
    // let and const keywords

// let vs. const vs. var
// as we see above - var allows both redeclaration and redefinition (anything goes)
// let replaces var
    // let allows for redefinition but not redeclaration
    // let forces you to follow best declaration + definition practices
let x = 5;
//let x; // error - redeclaration not allowed
x = 'redefinition is allowed';

// const is a new thing - for constant variables
// doesn't allow for redeclaration or redefinition
const c = 3.1415;
// c = 717; // error - redefinition of a const variable is not allowed

/*
Basic Math Operations in JS
*/
console.log('\n\nMath:');

// Addition, Subtraction, Multiplication, and Normal Division are all the same as python
let sum1 = 1.5 + 3;
console.log(sum1);
let diff1 = 500-300;
console.log(diff1);
let product1 = 50*50;
console.log(product1);
let div1 = 21/7;
console.log(div1);
// exponents are also the same - **
let pow1 = 2**3;
console.log(pow1);

console.log('\n\nRounding:');
// Rounding - no ints and floats means we need rounding to get to integer values
// Math.round(<value>) -> rounds to the nearest integer
// Math.floor(<value>) -> rounds down
// Math.ceil(<value>) -> rounds up
let roundedPi = Math.round(3.1415);
console.log(roundedPi);
let roundPiup = Math.ceil(3.1415);
console.log(roundPiup);

// rounding to 2 decimal places
// .tofixed() for display purposes
let value_to_round = 3.141592;
console.log(value_to_round.toFixed(2), typeof value_to_round.toFixed(2));
// Math.round() workaround - multiple the value by 100, round to the nearest integer, then divide by 100
console.log(Math.round(value_to_round*100)/100);

console.log('\n\nDatatype Interaction Mindbenders:')
// Mind bender - javascript interactions of variables of different datatypes
let test1 = 4.14 + '4'; // string '4.144'
console.log(test1, typeof test1);

let test2 = '4' + false; // string '4false'
console.log(test2, typeof test2);

let test3 = 4 + true; // the number 5?????
console.log(test3, typeof test3);

let test4 = 4 + false; // the number 5?????
console.log(test4, typeof test4);

let test5 = [] + undefined; // the string undefined??
console.log(test5, typeof test5);

let test6 = [] + false; // the string false??
console.log(test6, typeof test6);

let test7 = [] + 4; // the string 4????
console.log(test7, typeof test7);

// What the hell is happening here???
// JavaScript is doing some conversion shenanigans at compile time to avoid errors at runtime
// JavaScript will pretty much do whatever it can to avoid an error
// which means we must be much more careful/intentional about our operations and datatypes than we are in python
// in python, if we do something wrong, we get an error
// in javascript, if we do something wrong, we get 4 + true = 5
// or undefined + [] is like true or something? there's a lot of weird ones out there
// https://www.youtube.com/watch?v=et8xNAc2ic8

console.log('\n\nFunctions:')
/*
JavaScript Functions
- serve much the same purpose and strucutre as python functions
    - we give a name to a process that accepts some input and gives some output
    - we can use that name with whatever input to perform that process
*/

// regular named function with the function keyword
// input parenthesis just like python, curly brackets controlling code block instead of indentation and a colon
function helloWorld(){
    return 'Hello, Foxes!'
};

//calling that function
let returned_value = helloWorld();
console.log(returned_value);

// named function using a variable name
let helloName = function(n){
    return 'Hello, ' + n + '!'
};
let returned_value2 = helloName('Devon'); // note: not providing proper input for your function may not produce an error in JS
console.log(returned_value2);

// my preffered method for writing functions in JS
// ES6 Arrow Function
// let <funcName> = (<inputs>) => { <code> }
// taking the same helloName function and rewriting as an ES6 arrow function:
let helloNameArrow = n => {
    return 'Hello, ' + n + '!'
};

let returned_value3 = helloNameArrow('Devon');
console.log(returned_value3);

// when using no parameters with an arrow function:
let helloWorldArrow = () => {
    return 'Hello, Foxes!'
};
// when using more than one parameter with an arrow function, the () before the arrow are necessary
// when using one and only one parameter with an arrow function, the () become optional (see above)

// What is a self-invoking function? A type of anonymous function (it has no name)
// A function that calls itself when it is defined
// a function call where we put the function definition where the name of the function being called would usually go
(function(n){return 'Hello, ' + n + '!'})('Joel');

console.log('\n\nConditionals/Control Flow:');
// JavaScript conditionals and the way we use them are the same conceptually as python conditionals
// the concepts and flow of if statements, elif statements, and else statements are all the same
// only difference is the syntax
/*
if (condition)
    { code to run } 
else if (condition)
    { code to run } 
else
    { code to run }
*/
let age = 37
if (age < 18) {
    console.log('Child')
} else if (age < 65) {
    console.log('Adult')
} else {
    console.log('Senior')
}

// most operators (<, >, >=, <=) are the same
// some operators are different
    // combining conditionals:
        // python 'and' becomes && in javascript
        // python 'or' becomes || in javascript
let color = 'blue';
if (color == 'blue'){
    if(color != 'green'){
        console.log(color);
    }
}
// the 'in' operator for membership tests only works for arrays/objects aka python lists/dictionaries
// == in javascript is not the same as == in python!!
console.log('4' == 4); // string 4 equals number 4?
// true!
// == in python tests for equality of value and type
// == in javascript tests only for equality of value NOT for equality of type
// hence '4' the string and 4 the number have the same value so == comes back true in JS

// what is the equivalent to Python's == in JavaScript?
// ===
// triple equals in JavaScript tests for equality of value AND type
console.log('4' === 4); // false -> equal value, not equal type

// JavaScript conditional shorthand
// ... theres always another way to do something in JS
// the JS Ternary Operator is a shorthand way of writing conditional structures
/*
conditional1 ? code to run1 : conditional2 ? code to run2 : code to run3

would be shorthand using the ternary operator for the following:
if (conditional1){
    code to run1
} else if (conditional2){
    code to run2
} else {
    code to run3
}
*/
let age2 = 37;
age2 < 18 ? console.log('Child') : age2 < 65 ? console.log('Adult') : console.log('Senior')

// null in JS is the same as None in Python
// an intentionally assigned value meanining nothing
let noneequiv = null;
let undefinedvar;
console.log(noneequiv);
console.log(undefinedvar);
console.log(noneequiv === undefinedvar);

// Looping in JS
console.log('\n\nLoops:');
// most common loop type - for loop through the indexes of an array or string
// for loop syntax:
// for (<pointer variable>; <conditional>; <step>){ code to run at each step }
// many people view this syntax as more similar to a python while loop
let mystring = 'Fennec Fox';
// loop thru the letters in mystring
// mystring.length is the equivalent to python's len(mystring)
// i++ is the same as python's i+=1 or i=i+1
for (let i = 0; i<mystring.length; i++){
    console.log(mystring[i]); // indexing into our string just like python
}

// a loop through number 1 to 10 backwards aka 10, 9, 8, etc.
for (let i = 10; i>0; i--){
    console.log(i);
}

// while loop
// looping based on a condition
// when that condition is true, run another step of the loop
// when the condition is false, end the loop
console.log('\n\nWhile loop:')
let n = 1;
while (n<11){
    console.log(n);
    n++;
}

// can we still nest loops?
// of course!
let teststring = 'abc';
for (let i = 0; i<teststring.length; i++){
    for (let j = 1; j < 4; j++){
        console.log(teststring[i], j);
    }
};

console.log('\n\nDo-while:')
// The Do-While loop
// the do-while loop is an alternative to a while loop
// that will always run at least once regardless of its condition
// normal while loop - can do zero steps
while (false){
    console.log('no steps taken');
};
// essentially all a do-while loop is doing
// is changing the location of the conditional check
// to determine if the loop runs
// traditional while loop: check condition -> run code
// do while loop: run code -> check condition
do {
    console.log('at least one step taken');
} while (false);

console.log('\n\nArrays:');
/* 
JavaScript Arrays are the equivalent of Python's lists
Arrays are ordered, indexed, and can contain any values/datatypes
We can have an array of strings, an array of numbers, and array of other arrays
or any combination of data in our array
Accessing the values at an array index is much the same as a python list
*/
// declaring + defining an array
let animals = ['Fennec Fox', 'Honey Badger', 'Echidna', 'Siberian Tiger'];
// accessing the value at the 0th index:
console.log(animals[0]);
// redefining a value at an index:
animals[1] = 'Giant Panda';
console.log(animals[1]);

// method 1 for looping through an array:
// using indexes
for (let i = 0; i<animals.length; i++){
    console.log(i, animals[i]);
}

// method 2: while loop same thing
let indexpointer = 0;
while (indexpointer < animals.length){
    console.log(indexpointer, animals[indexpointer]);
    indexpointer++;
}

// adding and removing values from an array
// Array.push() same thing as python's list.append()
// adding to the end of the list
console.log(animals);
animals.push('Osprey');
console.log(animals);

// Array removal in javascript is more complicated
// there is no direct removal by value
// .pop() always removes the last element from the array
console.log(animals);
animals.pop()
console.log(animals);

// index-based removal (similar to specifying an index in python's list.pop(index))
// is done through JS's Array.splice() method
// splice can take up 3 arguments
// Array.splice(<starting index>, <number of values to remove>, <replacement values>)
// using splice to remove 'Echidna' from our array
console.log('\nSplice:');
console.log(animals);
animals.splice(2, 1)
console.log(animals);

// using splice to remove both 'Giant Panda' and 'Siberian Tiger'
console.log(animals);
animals.splice(1, 2)
console.log(animals);

console.log('\n\nValue-based removal:')
// JS equivalent to .remove() -> must write your own loop (something Python's remove does itself)
// write a loop through the array to find the value
// then do a splice for index-based removal
animals = ['Fennec Fox', 'Honey Badger', 'Echidna', 'Siberian Tiger'];
console.log(animals);
for (let i = 0; i<animals.length; i++){
    if (animals[i] === 'Honey Badger'){
        animals.splice(i, 1);
        break; // same as python's break
    }
};
console.log(animals);

// 3 approaches to removal:
// removal from end: Array.pop()
// index-based removal: Array.splice(<index>, 1)
// value-based removal: loop with a conditional into splice

// another looping method - some people like this one, I personally don't
// Array.forEach(<callback function>)
// allows you to define a callback function to run on each item in the array
// * not dissimilar to python's map() function or JS's map() function for that matter
console.log('\n\nforEach:');
animals.forEach((animal) => {console.log(animal+'!')});


console.log('\n\nArray Methods:');
animals.push('Platypus', 'Tibetan Fox', 'Chinchilla', 'Sea Otter'); // fun fact about array.push() is you can push multiple values at once unlike .append()
/*
.join(), .slice(), .search()
*/
// .slice() is just like python's list slicing [:] except we can't specify a step
// the starting value is inclusive, the ending value is exclusive
console.log(animals);
console.log(animals.slice(3));
console.log(animals.slice(0, 4));

// .join() is just like python's join except the input order is flipped
// convert from an array to a string
// python: separator.join(list)
// js: array.join(separator)
let animals_string = animals.join(', ');
console.log(animals_string, typeof animals_string);

// .indexOf()
// .indexOf() is like python's .index() function
// searches for a value in an array, returns the index of that value or -1 if the value isn't present
console.log(animals.indexOf('Chinchilla'));
console.log(animals.indexOf('Red Panda'));

// String.search()
// searches the string for a substring or character
// returns the starting index of the character/substring
let strtosearch = 'Fennec Fox';
console.log(strtosearch.search('Fox')); // 'Fox' starts at index 7 in 'Fennec Fox' so 7 is returned
console.log(strtosearch.search('c'));

// Another conditional structure:
// switch case statement
switch(animals[5]){
    case 'Fennec Fox':
        console.log('This is a Fennec Fox.');
        break;
    case 'Human':
        console.log('This is a human.');
        break;
    case 'Penguin':
        console.log('This is a penguin');
        break;
    case 'Chinchilla':
        console.log('This is a chinchilla.');
        break;
    default:
        console.log('I dont know this animal.');
};


console.log('\n\nArray Methods Cont:');
/*
An introduction to callback functions with:
.map(), .filter(), .reduce()
*/