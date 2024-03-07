const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       let arrPlaylist1 = [];
       let arrPlaylist2 = [];

       arrPlaylist1.push(Object.values(library.playlists.p01));
       arrPlaylist2.push(Object.values(library.playlists.p02));

       console.log(arrPlaylist1[0] + ": " + arrPlaylist1[1] + " - " + arrPlaylist1[2]);
       console.log(arrPlaylist2[0] + ": " + arrPlaylist2[1] + " - " + arrPlaylist2[2]);
}

// printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       let arrTrack = [];

       arrTrack.push(Object.values(library.tracks.t01));
       arrTrack.push(Object.values(library.tracks.t02));
       arrTrack.push(Object.values(library.tracks.t03));

       for (const track in arrTrack) {
         console.log(arrTrack[track][0] + ": " + arrTrack[track][1] + " by " + arrTrack[track][2] + " (" + arrTrack[track][3] + ")");
       }
};

// printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       let arrList = [];
       let arrTrack = [];
       let playlistValues = Object.values(playlistId);

       for (play of playlistValues) {
         if (Array.isArray(play)) {
           for (single of play) {
             arrList.push(single);
           }
         } else {
              arrList.push(play);
         }
       }

       // console.log the playlist
       console.log(arrList[0] + ": " + arrList[1] + " - " + arrList[2] + ", " + arrList[3]);

       arrTrack.push(Object.values(library.tracks.t01));
       arrTrack.push(Object.values(library.tracks.t02));
       arrTrack.push(Object.values(library.tracks.t03));

       let trackStore = [];
       for (const track of arrTrack) {
              for (const single in track) {
                     if (track[0] === arrList[single]) {
                            trackStore = Object.values(library.tracks[arrList[single]])
                            console.log(trackStore[0] + ": " + trackStore[1] + " by " + trackStore[2] + " (" + trackStore[3] + ")");
                     }
              }
       }
};

const playlistId = library.playlists.p01;
printPlaylist(playlistId);


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {


}

// addTrackToPlaylist();


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

}


// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}