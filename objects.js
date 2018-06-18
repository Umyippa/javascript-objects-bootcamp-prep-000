var playlist = { artistName: "songTitle"}

function updatePlaylist(playlist, [artistName], [songTitle]) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi" ;
  return playlist;
  
}

function removeFromPlayList(playlist, [artistName]) {
  delete playlist['Slowdive'] = ;
  return playlist;
}