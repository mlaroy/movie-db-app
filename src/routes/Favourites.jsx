import { useContext } from 'react'
import { AppContext } from '../context/appContext'
import MovieThumb from '../components/MovieThumb'

const Favourites = () => {
    const { favourites } = useContext(AppContext);

    if(!favourites.length) return (
        <div className="container mt-24">
            <div className="movies">
                <h2 className="text-2xl font-bold">No Favourites Yet!</h2>
            </div>
        </div>
    )

    return (
        <div>
            <div className="container">
                <div className="movies">
                        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {favourites && favourites.map((movie) =>  <MovieThumb key={movie.id} movie={movie} />) }
                        </ul>
                </div>
            </div>
        </div>
  )
}

export default Favourites;
