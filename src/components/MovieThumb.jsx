import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Favorites from './Favorites'
import { AppContext } from '../context/appContext'
import { buildImageURL } from '../helpers/api'

const MovieThumb = ({ movie }) => {
    const { favourites } = useContext(AppContext);
    const isFavourite = favourites.some((favourite) => favourite.id === movie.id);

  return (
    <li className="relative aspect-[320/480] ">
        <div
            className="absolute bottom-0 w-full h-full flex flex-col"
        >
            <div className="poster">
                <img
                    src={buildImageURL(
                        movie.poster_path
                    )}
                    alt={movie.title}
                    className="block object-cover w-full h-full absolute inset-0 opacity-90"
                />
            </div>
            {isFavourite && <span className="absolute top-2 left-4 shadow-lg text-2xl text-yellow-500">❤️</span>}
            <div className="mt-auto z-10 p-4 pt-24 bg-gradient-to-b from-transparent to-black/90">
                <h3 className="font-semibold mt-auto text-lg lg:text-2xl hover:text-yellow-500 transition leading-tight">
                    <Link to={`/movie/${movie.id}`}>
                        {movie.title}
                    </Link>
                </h3>
                {/* <p class="mt-2 mb-2 font-semibold text-sm">{new Date(movie.release_date).getFullYear()}</p> */}
                <Favorites movie={movie} />
            </div>
        </div>
    </li>
  )
}

export default MovieThumb
