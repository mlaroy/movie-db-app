import { useEffect, useState } from "react"
const apiKey = import.meta.env.VITE_MOVIEDB_API_KEY
import SkeletonLoader from "../components/SkeletonLoader";
import MovieThumb from "../components/MovieThumb";
import Layout from "../components/Layout"

const listOptions = [
	{
		label: "Popular",
		value: "popular",
		url: 'popular'
	},
	{
		label: "Top Rated",
		value: "toprated",
		url: 'top_rated'
	},
	{
		label: "Now Playing",
		value: "nowplaying",
		url: 'now_playing'
	},
	{
		label: "Upcoming",
		value: "upcoming",
		url: 'upcoming'
	},
];

const Home = () => {
	const [movies, setMovies] = useState([])
	const [sort, setSort] = useState(listOptions[0])
	const [isFetching, setIsFetching] = useState(false)

	const skeletonArray = new Array(12).fill(0);

    useEffect(() => {
        if(!sort) {
            document.title = `Movie App - Michael LaRoy`;
        }
        document.title = `${sort.label} Movies - Movie App`;
    }, [sort])



	const fetchMovies = async (sort) => {
		setIsFetching(true)

		try {
			const url = `https://api.themoviedb.org/3/movie/${sort.url}?api_key=${apiKey}&page=1&include_adult=true`
			const res = await fetch(url)
			const data = await res.json()
			setMovies(data.results)
		} catch (error) {
			console.error(error)
		} finally {
			setTimeout(() => setIsFetching(false), 500)
		}
	}

	useEffect(() => {
		const fetchAPI = async () => {
			await fetchMovies(sort)
		}

		fetchAPI()
	}, [])

	const handleSortChange = (value) => {
		const option = listOptions.find((option) => option.value === value)
		setSort(option)
		fetchMovies(option)
	}

	return (
		<Layout>
			<div className="container">
				<form className="flex items-start flex-wrap gap-4 mb-8">
					{listOptions.map((option) => {
						const isChecked = sort.value === option.value
						return (
							<label
								key={option.value}
								className={` ${isChecked ? 'bg-yellow-500 text-slate-800' : 'bg-slate-800 text-slate-50 '} p-2 lg:px-3 lg:py-2 rounded shadow cursor-pointer hover:bg-yellow-500 hover:text-slate-800 transition shrink-0 text-sm lg:text-base`}>
								<input
									type="radio"
									name="sort"
									className="sr-only"
									value={option.value}
									checked={isChecked}
									onChange={(e) => handleSortChange(e.target.value)}
								/>
								<span>{option.label}</span>
							</label>
						)
					})}
				</form>
				<div className="movies">
					<ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{isFetching &&
							skeletonArray.map((i, index) => <SkeletonLoader key={index * Math.random() } />)
						}
						{!isFetching && movies &&
							movies.map((movie) => <MovieThumb key={movie.id} movie={movie} />) }
					</ul>
				</div>
			</div>
		</Layout>
	)
}

export default Home
