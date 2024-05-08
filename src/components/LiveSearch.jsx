import { useState, useRef, useEffect } from 'react'
import { buildImageURL } from '../helpers/api'
import { Link, useLocation } from 'react-router-dom'
import useClickOutside from '../hooks/ClickOutside'
import noPoster from "../assets/no-movie-poster.jpg"

const LiveSearch = () => {
    const location = useLocation()
    const [results, setResults] = useState(null)
    const [search, setSearch] = useState('');

    const handleSearch = async (e) => {
        setSearch(e.target.value)
        if (e.target.value.length > 2) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_MOVIEDB_API_KEY}&query=${e.target.value}&language=en-US&page=1`
            const res = await fetch(url)
            const data = await res.json()
            setResults(data.results)
        } else {
            setResults(null)
        }
    }

   useEffect( () => {
         setResults(null)
    }, [location])

    const wrapperRef = useRef(null);
    const onOutsideClick = () => {
        setResults(null)
    };

    useClickOutside(wrapperRef, onOutsideClick);


  return (
    <div className="relative" ref={wrapperRef}>
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                onChange={handleSearch}
                type="search"
                value={search}
                placeholder="Search for a movie"
                className="w-48 lg:w-64 p-2 lg:px-4 lg:py-2 bg-slate-900 text-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition text-sm lg:text-lg" />
        </form>
        <div className="results absolute top-full w-full rounded-b-md overflow-hidden fade-in-full max-h-96 overflow-y-scroll p-2">
            {results && results.map((result) => {
                return (
                    <Link
                        key={result.id}
                        to={`/movie/${result.id}`}
                        className="w-full text-lg block hover:underline transition bg-slate-200 p-3 text-slate-900">
                        <div className="flex gap-2">
                            <div className="shrink-0">
                                <img src={result.poster_path ? buildImageURL(result.poster_path, "w92") : noPoster } alt={result.title} className="w-16" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-base">{result.title}</h3>
                                {new Date(result.release_date).getFullYear()}
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default LiveSearch
