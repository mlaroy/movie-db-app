import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { buildImageURL } from '../helpers/api'

const Header = () => {
    const [results, setResults] = useState(null)

    const handleSearch = async (e) => {
        if (e.target.value.length > 2) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}&query=${e.target.value}`
            const res = await fetch(url)
            const data = await res.json()
            setResults(data.results)
        } else {
            setResults(null)
        }
    }


  return (
    <header className="py-8 relative z-50">
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="logo">
                    <h1>
                        <NavLink to="/">
                            <img src={logo} alt="movie app logo" className="blog w-24" />
                        </NavLink>
                    </h1>
                </div>
                <div className="relative">
                    <form>
                        <input
                            onChange={handleSearch}
                            type="search"
                            placeholder="Search for a movie"
                            className="w-64 px-4 py-2 bg-slate-900 text-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />
                    </form>
                    <div className="results absolute top-full w-full rounded-b-md overflow-hidden">
                        {results && results.map((result) => (
                            <div key={result.id} className="bg-slate-200 p-3 py-1 text-slate-900">
                                <NavLink to={`/movie/${result.id}`} className="w-full text-sm block hover:underline transition">
                                    <div className="flex gap-2">
                                        <div>
                                            <img src={buildImageURL(result.poster_path, "w92")} alt={result.title} className="w-12" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{result.title}</h3>
                                            {new Date(result.release_date).getFullYear()}
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>

                <nav>
                    <ul className="flex gap-4 items-center">
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
