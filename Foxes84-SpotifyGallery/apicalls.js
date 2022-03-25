//Function for getting our access token
const getAuth = async () => {
    // place clientID and clientSecret here!
    
    const response = await fetch('https://accounts.spotify.com/api/token',
        {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(clientID + ':' + clientSecret)}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });
    const token = await response.json();
    console.log(token);
    return token.access_token
}


// function for making an api call to gather single song info
const getSong = async (songname, artist, token) => {
    let response = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:${songname}+artist:${artist}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    //console.log(response);
    let data = await response.json();
    //console.log(data.tracks.items[0]);
    return data.tracks.items[0]
}

// set up my array of songs as a global variable
// here it is just declared globally
// so I can use and access this music variable from any function
let music = [{id: 0, track: 'Coffee', artist: 'Sylvan Esso' },
{id: 1, track: 'Skin', artist: 'Dijon' },
{id: 2, track: 'Hey Mami', artist: 'Sylvan Esso' },
{id: 3, track: 'New York', artist: 'Trettman' },
{id: 4, track: 'Pink Skies', artist: 'Wiley from Atlanta' },
{id: 5, track: 'Leftovers', artist: 'Dennis Lloyd' },
{id: 6, track: 'From Eden', artist: 'Hozier' },
{id: 7, track: 'The Devil Wears a Suit and Tie', artist: 'Colter Wall' },
{id: 8, track: 'American Boy', artist: 'Estelle' }];
// global playing variable - keeps track of what music is currently playing (if any)
let playing;
let stopbtn = document.getElementById('stopbtn');
let headertitle = document.getElementById('headertitle');

// set up a process to make all of my api calls happen - initial page loading
const setupTracklist = async () => {
    const token = await getAuth();
    // once we have our api token, loop through our music choices
    for (let i = 0; i < music.length; i++) {
        // gather data
        let data = await getSong(music[i].track, music[i].artist, token);
        music[i]['preview_url'] = new Audio(data.preview_url); // create an HTML audio object from the song preview
        music[i]['album_cover'] = data.album.images[0].url;
        // place data on the place
        // select the proper gallery location
        let img = document.getElementById(`${i}`);
        // change the source to the album cover
        img.src = music[i].album_cover;
        // show the image
        img.hidden = false;
    }
    console.log(music);
}

setupTracklist();

// Click event for album covers -> plays the associated song
let clickEvent = (id) => {
    // identify the track info for the clicked image
    let track = music[id.slice(-1)];
    console.log(track);

    if (playing && !playing.preview_url.paused) { // if theres a song playing and it is not currently paused
        // is this the same album cover of the currently playing song?
        if (playing == track) {
            // pause and don't continue with the rest of this function
            pauseTrack();
            return
        }
        // is this a different album cover?
        else {
            // pause that song and continue on to start playing the new one
            playing.preview_url.pause();
            let playingbtn = document.getElementById(`playbtn${playing.id}`);
            playingbtn.innerHTML = 'Play';
        }
    }
    // play the audio
    console.log(`Playing ${track.track} by ${track.artist}...`);
    track.preview_url.play();
    // update our currently playing track global variable
    playing = track;
    // modify the play button to a pause button
    let playingbtn = document.getElementById(`playbtn${playing.id}`);
    playingbtn.innerHTML = 'Pause';
    // modify the stopbtn to be a pause button
    stopbtn.disabled = false;
    stopbtn.innerHTML = 'Pause';
    // modify the header
    headertitle.innerHTML = `${track.track} | ${track.artist}`;
}

// Pause button -> stops currently playing music
let pauseTrack = () => {
    console.log('Paused...');
    playing.preview_url.pause();
    let playingbtn = document.getElementById(`playbtn${playing.id}`);
    playingbtn.innerHTML = 'Play';
    stopbtn.disabled = true;
    stopbtn.innerHTML = 'Click an album cover to hear a song preview!';
    headertitle.innerHTML = 'Foxes 84 | SpotifyAPI Music'
}

let btnShow = (id) => {
    let btn = document.getElementById(`playbtn${id[7]}`);
    btn.hidden = false;
}

// trigger: onmouseleave="btnHide(this.id);"
// issue: infinite loop showing and hiding button due to mouse hovering and leaving the img
let btnHide = (id) => {
    let btn = document.getElementById(`playbtn${id[7]}`);
    btn.hidden = true;
}