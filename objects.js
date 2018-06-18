var playlist = { PinkFloyd: "The Wall"}

function updatePlaylist(playlist, artisName, songTitle) {
  return Object.assign({}, playlist, { [artisName]: songTitle})
}