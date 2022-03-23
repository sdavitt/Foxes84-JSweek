/* 
-- JavaScript and the DOM --
There are a lot of options for JavaScript and HTML DOM interactions
We won't cover them all today
We can use JavaScript to select, modify, add, hide, remove elements from our HTML page
And because we're doing this through JavaScript (which happens client-side aka on the user's browser)
None of this causes a page refresh
*/

// selecting an element from your html
// interacting with the javascript document object
// which essentially represent the html document
console.log(document);
// I can access tags in this html through getElement(s) methods
// or the querySelector
console.log(document.getElementsByTagName('h1')[0].id, typeof document.getElementsByTagName('h1')[0].id);
console.log(document.getElementById('text').innerHTML, typeof document.getElementById('text').innerHTML);
console.log(document.querySelector('#text'));

// modify the text on a 5 second delay
setTimeout(()=> {document.getElementById('text').innerHTML = 'New text set through JS!'}, 5000);

// eventListeners and modifying html with a JS function
// an eventListener is a JavaScript function that looks for certain behaviour or user interaction on an html page
// and then runs whatever specified JavaScript process you want

// adding a click eventListener to our button
// create function to run when click happens
let changeColor = () => {
    // select the tag we're trying to change
    let header = document.getElementById('text')
    !header.className ? header.className = 'color-change1' :
    header.className === 'color-change1' ? header.className = 'color-change2' :
    header.className = '';
    console.log(header.className);
}

// select the button
let color_button = document.getElementById('color-button');
console.log(color_button);
// add the event listener
color_button.addEventListener('click', changeColor);

// adding a new button to our html from javascript
// we can actually JS to add elements to the html page
// we'll be looking at the simplest adding method - document.<element>.append()
// adds to the end of the specified element
let new_button = document.createElement('button');
new_button.innerHTML = "I'm alive!!!";
document.body.append(new_button);

let addText = () => {
    let new_text = document.createElement('h3');
    new_text.innerHTML = 'The Fennec Fox has the largest ear-to-body ratio of any mammal';
    new_text.className = 'color-change2';
    document.body.append(new_text);
}

new_button.addEventListener('mouseover', addText);

// any selector that can select multiple elements will give you an HTMLCollection Array
// and from there you can see dropdowns of all the potential attributes in the console
console.log(document.getElementsByTagName('button'));