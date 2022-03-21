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