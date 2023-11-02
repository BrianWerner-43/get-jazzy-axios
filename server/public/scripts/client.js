const { response } = require("express");

function onReady() {
    console.log('Hello from client.js');

    axios({
        method: 'GET',
        url: '/artist'
    })
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response);
            // quotesFromServer will be an Array of quotes
            let quotesFromServer = response.data;
            let contentDiv = document.querySelector('#artistTableBody');
            for (let artist of quotesFromServer) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
            }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            alert('Something bad happened! Check the console for more details.')
        });

    // TODO Add Axios request for /songs and display on DOM
    axios({
        method: 'GET',
        url: '/song'
    })
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response);
            // renderArtist(songListArray);// might work?

            // quotesFromServer will be an Array of quotes
            let quotesFromServer = response.data;
            let contentDiv = document.querySelector('#songTableBody');
            for (let song of quotesFromServer) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `;
            }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            alert('Something bad happened! Check the console for more details.')
        });
}

onReady();

// function artistSong(event) { // original copy
//     event.preventDefault();
//     let artistInput = document.getElementById('artist-name').value;
//     let songInput = document.getElementById('song-name').value;
//     document.getElementById('artist-name').value = '';
//     document.getElementById('song-name').value = '';

//     // This will append to the DOM
//     songBody.innerHTML += `
//     <li>
//      `
// }


//A function that will handle the submit inputs
// function renderArtist(songListArray) {
//    let songList = document.getElementById('songBody');
//    songList.innerHTML = '';

//    for (let song of songListArray) {
//     songList.innerHTML += `
//     <li> ${song.title}: ${song.artist}</li>`
//    }
     
// }
// renderArtist();
 
// function artistSong(event) {
//     event.preventDefault();
//     let title = document.getElementById('artist-name').value;
//     let artist = document.getElementById('song-name').value;

//     document.getElementById('artist-name').value = '';
//     document.getElementById('song-name').value = '';

//     let newArtistSongs = {
//         title: title,
//         artist: artist
//     }

//     axios({
//         method: 'POST',
//         url: '/songlistArray',
//         data: newArtistSongs
//     }).then((response) =>{
//         onReady();
//     })



// }
// artistSong();
