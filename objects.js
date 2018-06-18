var playlist = { PinkFloyd: "The Wall"}

function updatePlaylist(playlist, 'artistName', 'songTitle') {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}