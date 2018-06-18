var playlist = { PinkFloyd: "The Wall"}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle});
  return playlist;
  
}