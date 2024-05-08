import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import LiveSearch from './LiveSearch'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const isMobileScreen = window.matchMedia('(max-width: 768px)')

        if (isMobileScreen.matches) {
            setMenuOpen(false)
            setIsMobile(true)
        }

        isMobileScreen.addEventListener('change', () => {
            setMenuOpen(false)
            setIsMobile(isMobileScreen.matches ? true : false)
        })
    }, [])

  return (
    <header className="py-8 relative z-50">
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="logo shrink-0">
                    <h1>
                        <NavLink to="/">
                            <img src={logo} alt="movie app logo" className="blog w-16 lg:w-32" />
                        </NavLink>
                    </h1>
                </div>

                <LiveSearch />



                {isMobile && (
                    <>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 lg:hidden"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                        {menuOpen && (
                            <nav className="flex flex-col fixed top-0 left-0 h-screen w-screen bg-black/80 p-4">
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="ml-auto p-4"
                                    >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 lg:hidden"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                                <ul className="flex flex-col gap-4 text-lg text-center">
                                    <li><NavLink to="/" className="hover:text-yellow-500 transition">Home</NavLink></li>
                                    <li><NavLink to="/about" className="hover:text-yellow-500 transition">About</NavLink></li>
                                    <li><NavLink to="/favourites" className="hover:text-yellow-500 transition">Favourites</NavLink></li>
                                </ul>
                            </nav>
                        )}
                    </>
                )}

                {!isMobile && <nav className="flex">
                    <ul className="flex gap-4 items-center text-lg">
                        <li><NavLink to="/" className="hover:text-yellow-500 transition">Home</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-yellow-500 transition">About</NavLink></li>
                        <li><NavLink to="/favourites" className="hover:text-yellow-500 transition">Favourites</NavLink></li>
                    </ul>
                </nav>}
            </div>
        </div>
    </header>
  )
}

export default Header
