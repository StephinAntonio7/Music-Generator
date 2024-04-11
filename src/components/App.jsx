import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


function App() {

  return (
    <div>

    <Navbar />

    <h1>What's the Vibes?</h1>

    <Outlet />

  </div>

  )
}

export default App;


    // <div className="App">
  
    // <h1>Playlist Generator</h1>

    // <div className="grid with-sidebar">

    // <div className="flex-container">
    // <PlaylistsContainer playlists={playlists} setPlaylists={setPlaylists}/>
    // </div>

    // <div className="sidebar">
    // <PlaylistForm setPlaylists={setPlaylists}/>
    // </div>

// </div>

// </div>

// routing --> multiple pages

// server --> json server

// MOVIES

// GET /movies --> data for ALL movies

// GET/movies/1 --> data for the first movie (a.ka. movie with id of 1)

// POST /movies --> create data for a movie

// PATCH /movies/1 --> update data for movie with id 1

// DELETE /movies/1 --> delete data for movie with id 1

// FRONTEND

// GET /home --> everything