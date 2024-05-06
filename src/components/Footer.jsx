import React from "react"

const Footer = () => {
	return (
		<footer className="mt-auto py-16">
			<div className="container">
                <p className="text-sm">&copy; 2023 - {new Date().getFullYear()} - <a href="https://mikelaroy.ca" className="underline hover:text-yellow-500 transition">Michael LaRoy</a></p>
            </div>
		</footer>
	)
}

export default Footer
