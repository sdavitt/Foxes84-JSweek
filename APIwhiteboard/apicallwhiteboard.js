// Goal is make an api call
// Get data from the endpoint: https://raider.io/api/v1/characters/profile?region=us&realm=Area52&name=Mokse&fields=guild%2Craid_progression%2Cmythic_plus_ranks%2Craid_achievement_curve%3Asanctum-of-domination
// Place in an object that we create (aka for this api call, create an instance of our object)

class Character{
    constructor(data){
        // all info I want will be within the data object - so each property will be a transformation/access chain in data  
        this.name = data.name;
        this.class = data.class;
        this.guild = data.guild.name;
        this.spec = data.active_spec_name;
        this.role = data.active_spec_role;
        this.realm = data.realm;
        this.mplus = data.mythic_plus_ranks.class.realm;
        if (data.raid_achievement_curve[0].cutting_edge){
            this.cuttingegde = data.raid_achievement_curve[0].cutting_edge;
        } else {
            this.cuttingegde = null;
        }
    }

    printInfo(){
        console.log(`Name: ${this.name}\nClass: ${this.class}\nSpecialization: ${this.spec}\nRole: ${this.role}\nGuild: ${this.guild}\nRealm: ${this.realm}\nMythic Plus Rank for Class on Realm: ${this.mplus}`);
    }
}



// api call system
let getData = async (name) => {
    console.log('Working in getData... making api call')
    let response = await axios.get(`https://raider.io/api/v1/characters/profile?region=us&realm=Area52&name=${name}&fields=guild%2Craid_progression%2Cmythic_plus_ranks%2Craid_achievement_curve%3Asanctum-of-domination`);
    if (response.status != 200){
        console.log('Error making api request - bad character name');
        return
    }
    console.log('Api call successful, passing data back to loadData');
    return response.data
}

let loadData = async (name) => {
    console.log('Process begins with loadData');
    let data = await getData(name);
    if (!data){
        console.log(`Bad character name: ${name} does not exist.`)
    }
    console.log('\nReceived data, making character:\n');
    // if we reach this point data should be the result of the api call
    let mokse = new Character(data);
    mokse.printInfo(); 
    // the call to the function that adds to html
    console.log(`Passing new character to addToTable`);
    console.log(mokse);
    addToTable(mokse);
}

// Two new functions
// f1 - form interaction
// f2 - placing data on html page

document.getElementById('charForm').addEventListener('submit', (event) => {
    // stop the refresh
    event.preventDefault();
    // get the data
    console.log('Event happens - form data collected: call loadData with form data')
    let name = event.path[0][0].value;
    // pass the data
    loadData(name);
    // reset the form
    document.getElementById('charForm').reset();
});

let addToTable = (char) => {
    console.log('New character received, creating table row');
    let new_html = `<tr>
    <th scope="row">${char.name}</th>
    <td>${char.spec} ${char.class}</td>
    <td>${char.guild}-${char.realm}</td>
    <td>${char.role}: ${char.mplus}</td>
    </tr>`
    document.getElementById('chartbody').insertAdjacentHTML('afterbegin', new_html);
};
