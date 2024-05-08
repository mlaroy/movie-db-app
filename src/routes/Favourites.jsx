import { useContext, useEffect } from 'react'
import { AppContext } from '../context/appContext'
import MovieThumb from '../components/MovieThumb'
import Layout from "../components/Layout"
const Favourites = () => {
    const { favourites } = useContext(AppContext);

    useEffect(() => {
        document.title = `Favourites - Movie App`;
    })

    if(!favourites.length) return (
        <Layout>
            <div className="container mt-16">
                <div className="movies">
                    <h2 className="text-xl lg:text-3xl font-semibold mb-8">No Favourites Yet!</h2>
                </div>
            </div>
        </Layout>
    )

    return (
        <Layout>
            <div className="container mt-16">
                <div className="movies">
                        <h2 className="text-xl lg:text-3xl font-semibold mb-8">Favourites</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {favourites && favourites.map((movie) =>  <MovieThumb key={movie.id} movie={movie} />) }
                        </ul>
                </div>
            </div>
        </Layout>
  )
}

export default Favourites;
