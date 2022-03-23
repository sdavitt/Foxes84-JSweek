// set up the api call
let getData = async () => {
    let response = await axios.get('https://catfact.ninja/fact');
    if (response.status == 200){
        return response.data
    }
    return 'api call broken'
}

// tie the api call process to an event listener for the get data button
let loadData = async () => {
    // calls our api call function
    let data = await getData();
    console.log(data);
    // creates new html based on the result of the api call
    let new_row = `<tr><td scope='row'>${data.fact}</td></tr>`;
    // adds the new html to our page
    document.getElementById('catFacttbody').insertAdjacentHTML('afterbegin', new_row);
}


// make a clear data function and add that to an event listener for the clear data button
let clearData = () => {
    document.getElementById('catFacttbody').innerHTML='';
}

// let's make an api call based on some form data
// form submission function as a callback for the event listener
let form = document.querySelector('#pokemonForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let pokemon_name = event.path[0][0].value
    console.log(pokemon_name);
    // start the api request process
    loadPokemon(pokemon_name);
    form.reset();
});

let getPokemon = async (name) => {
    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

let loadPokemon = async (name) => {
    let data = await getPokemon(name);
    console.log(data);
    let new_row = `<tr>
    <th scope='row'>${data.name}</th>
    <td>${data.types[0].type.name}</td>
    </tr>`;
    // adds the new html to our page
    document.getElementById('pokemontbody').insertAdjacentHTML('afterbegin', new_row);
}

let clearPokeData = () => {
    document.getElementById('pokemontbody').innerHTML='';
}