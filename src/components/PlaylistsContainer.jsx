import Playlist from "./Playlist"

function PlaylistsContainer({playlists, setPlaylists}) {


  const mappedPlaylists = playlists.map ( playlist => {
    return <Playlist key={playlist.id} playlist={playlist} playlists={playlists} setPlaylist={setPlaylist}/>
  })

 

  return (
    <>
      {mappedPlaylists}
    </>
  )

}

export default PlaylistsContainer