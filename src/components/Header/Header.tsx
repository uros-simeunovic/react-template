import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <Link to={"/"} className='link'>Home</Link>
        <div className="line"></div>
        <Link to={"/create"} className='link'>Create</Link>
    </div>
  )
}

export default Header