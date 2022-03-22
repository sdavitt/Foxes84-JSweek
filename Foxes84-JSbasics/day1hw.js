//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, names){
    //Your code goes here
    for (let i = 0; i<names.length; i++){
        // conditional
        if (str.includes(names[i])){
            return 'matched dog_name'
        }
    }
    return 'no matches'
};

function complexfindWords(str, names){
    //Your code goes here
    match = false;
    for (let i = 0; i<names.length; i++){
        // conditional
        if (str.includes(names[i])){
            console.log(`Matched dog_name ${names[i]}`); // JS version of the f-string `${}`
            match = true;
        }
    };
    !match ? console.log('No matches.') : null; // ternary operator just for fun
};

//Call method here with parameters
console.log(findWords(dog_string, dog_names));

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

some_array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr){
    // write a loop that loops through just my even indexes
    for (let i = 0; i<arr.length; i+=2){
        // at each index, do a splice
        arr.splice(i, 1, 'even index');
        
        // alternative - just redefine
        //arr[i] = 'even index';
    }
};

replaceEvens(some_array);
console.log(some_array);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]