import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import LiveSearch from './LiveSearch'

const Header = () => {

  return (
    <header className="py-8 relative z-50">
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="logo">
                    <h1>
                        <NavLink to="/">
                            <img src={logo} alt="movie app logo" className="blog w-32" />
                        </NavLink>
                    </h1>
                </div>

                <LiveSearch />

                <nav>
                    <ul className="flex gap-4 items-center text-lg">
                        <li><NavLink to="/" className="hover:text-yellow-500 transition">Home</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-yellow-500 transition">About</NavLink></li>
                        <li><NavLink to="/favourites" className="hover:text-yellow-500 transition">Favourites</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
