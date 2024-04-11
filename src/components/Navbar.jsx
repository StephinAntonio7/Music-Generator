import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div>

        <Link to="/">Home</Link>

        <Link to="/about">Create A Playlist</Link>

        <Link to="/about/playlist">About: Playlists</Link>

        <Link to="/about/playlistItem">About: Playlist Item</Link>

    </div>
    )
  }
  
  export default Navbar