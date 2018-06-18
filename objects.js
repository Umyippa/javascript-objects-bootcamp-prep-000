var playlist = { PinkFloyd: "The Wall"}

function updatePlaylist(Object, artistName, songTitle) {
  return Object.assign({}, playlist, { ["PinkFloyd"]: "The Wall"})
}