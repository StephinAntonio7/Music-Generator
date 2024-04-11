import { useState } from "react"

function Playlist ({playlist, playlists, setPlaylists}) {

    const [showImage, setShowImage] = useState(true)

    function handleClick(){
        setShowImage(!showImage)
    }

    return (
        <div onClick={handleClick} className="playlist-item">

        {
        showImage
        ?
        <img onClick={handleClick} src={playlist.image_url} alt={playlist.genre} />
        :
        <>   
          <h3 onClick={handleClick}>{playlist.genre}</h3>
          <h4 onClick={handleClick}>{playlist.description}</h4>
          <h5 onClick={handleClick}>{playlist.vibe}</h5>
      </>
      }
    </div>
  )

}

export default Playlist