import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

// context
import AppProvider from "./context/appContext"

// components
import Header from "./components/Header"
import Footer from "./components/Footer"

// routes
import Home from "./routes/Home"
import About from "./routes/About"
import NotFound from "./routes/NotFound"
import Movie from "./routes/Movie"
import Favourites from "./routes/Favourites"

function App() {

	return (
		<Router>
            <AppProvider>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" exact element={<About />} />
                    <Route
                        path="/favourites"
                        exact
                        element={<Favourites />}
                    />
                    <Route path="/movie/:id" exact element={<Movie />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppProvider>
		</Router>
	)
}

export default App
