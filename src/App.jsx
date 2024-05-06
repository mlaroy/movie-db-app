import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
		<BrowserRouter>
            <AppProvider>
                <div className="page-wrapper flex flex-col bg-gradient-to-br from-slate-950 to-slate-800 text-slate-50 min-h-screen">
                    <Header />
                    <main>
                        <Routes basename="/portfolio/my-app">
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
                    </main>
                    <Footer />
                </div>
            </AppProvider>
		</BrowserRouter>
	)
}

export default App
