import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/appContext'

const Favorites = ({ movie }) => {

    const { favourites, removeFavourite, addFavourite } = useContext(AppContext);

    const isFavourite = favourites.some((favourite) => favourite.id === movie.id);

    return (
        <div className="text-xs relative z-10 mt-4">
            {isFavourite ? (
                <button
                    className="rounded bg-white/20 backdrop-blur-md px-2 py-1"
                    onClick={() => removeFavourite(movie)}
                >
                 ❌ Remove Favourite
                </button>
            ) : (
                <button
                    className="rounded bg-white/20 backdrop-blur-md px-2 py-1"
                    onClick={() => addFavourite(movie)}
                >
                <span className="text-yellow-500">❤️</span> Add to Favourites
                </button>
            )}
        </div>
    )
}

export default Favorites
