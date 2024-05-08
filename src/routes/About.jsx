import { useEffect } from "react"
import movieSvg from "../assets/movie-app-svg.svg"
import Layout from "../components/Layout"

const About = () => {

    useEffect(() => {
        document.title = `About - Movie App`;
    })

	return (
        <Layout>
            <div className="mt-16">
                <div className="container">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-8">About</h1>

                    <div className="max-w-xl mb-8">
                        <p>
                            This is a simple movie app using the <a className="underline hover:text-yellow-500 transition" href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noreferrer">The Movie Database (TMDb) API</a> to fetch movies.
                            This is for educational purposes only for the BCIT Front-End Developer program.
                        </p>
                    </div>

                    <img src={movieSvg} alt="movie db logo" className="block w-24" />
                </div>
            </div>
        </Layout>
	)
}

export default About
