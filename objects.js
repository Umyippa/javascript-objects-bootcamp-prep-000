var playlist = { PinkFloyd: "The Wall"}

function updatePlaylist(Object, artistName, songTitle) {
  Object.assign({}, playlist, { ["PinkFloyd"]: "The Wall"})
}