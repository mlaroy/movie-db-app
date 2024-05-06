import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
const apiKey = import.meta.env.VITE_MOVIEDB_API_KEY
import Favorites from "../components/Favorites"
import CastMember from "../components/CastMember"
import Layout from "../components/Layout"
import noPoster from "../assets/no-movie-poster.jpg"

import { buildImageURL } from "../helpers/api"

const Movie = () => {
	const [movie, setMovie] = useState(null) // [state, setState
	const { id } = useParams()

	useEffect(() => {
		const fetchMovie = async () => {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos,images,credits,content_ratings`
            const res = await fetch(url)
            const data = await res.json()
            setMovie(data)
        }
		fetchMovie()
	}, [id])


	const formatDate = (date) => {
		const d = new Date(date)
		return d.toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		})
	}

    if(!movie) {
        return null
    }

    const movieClasses = {
        bg: 'min-h-screen h-full'
    }

    const getRandomBackdrop = (backdrops) => {
        return backdrops[Math.floor(Math.random() * backdrops.length)].file_path
    }

	return (
        <Layout>
            <div className={movieClasses.bg}>
                <img
                    src={buildImageURL(getRandomBackdrop(movie.images.backdrops))}
                    alt={movie.title}
                    className="object-cover absolute inset-0 w-full opacity-20 h-full fade-in"
                />
                <div className="container mt-24 overflow-x-hidden">
                    <div className="flex gap-8">
                        <div className="poster w-1/4 sticky top-8">
                            <img
                                src={movie.poster_path ? buildImageURL(movie.poster_path, "original") : noPoster}
                                alt={movie.title}
                                className="block w-full"
                            />
                        </div>
                        <div className="relative">
                            <div className="mt-auto pb-16">
                                <div className="rating text-xs font-semibold mb-8 px-4 py-2 rounded bg-red-800 text-red-200 inline-flex gap-2">
                                    <span>⭐</span>
                                    Average Rating: {movie?.vote_average.toFixed(1)}/10
                                </div>
                                <p className="font-bold mb-2">
                                    {formatDate(movie.release_date)}
                                </p>
                                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
                                    {movie.title}
                                </h1>
                                <h2 className="italic mb-8">{movie.tagline}</h2>
                                <p className="text-lg mt-4 max-w-2xl">
                                    {movie.overview}
                                </p>
                                <div className="flex items-center gap-2 mt-4">
                                    {movie.genres.map(genre => {
                                        return (
                                            <span key={genre.id} className="bg-slate-200 text-slate-900 px-2 py-1 rounded text-xs">
                                                {genre.name}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div className="mt-8">
                                    <Favorites movie={movie} />
                                </div>
                                <div className="mt-8">
                                    See on <a href={`https://imdb.com/title/${movie.imdb_id}`} rel="noreferrer" className="underline hover:text-yellow-500 transition">IMDb</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {movie.credits.cast.length > 0 && <div className="mt-12 overflow-hidden max-w-screen">
                        <h3 className="font-semibold mb-4 border-yellow-500 border-b-2 inline-block">Top Cast:</h3>
                        <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory relative w-full">
                            {movie.credits.cast.slice(0, 12).map(cast => <CastMember cast={cast} key={cast.id} />)}
                        </ul>
                    </div>}

                    {movie.videos.results.length > 0 && <div className="mt-12 mb-12">
                        <h3 className="font-semibold mb-4 border-yellow-500 border-b-2 inline-block">Trailers:</h3>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {movie.videos.results.slice(-2).map(video => {
                                return (
                                    <div className="w-full" key={video.id}>
                                        <iframe
                                            key={video.id}
                                            src={`https://www.youtube.com/embed/${video.key}`}
                                            title={video.name}
                                            className="w-full h-full aspect-video"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>}
                </div>
            </div>
        </Layout>
	)
}

export default Movie
