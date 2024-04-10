import {Link} from 'react-router-dom'

function Navbar() {

    return (
        <div>
         <Link to="/">Home</Link>
         <link to="/about">About</link>
        </div>
    )
  }
  
  export default Navbar