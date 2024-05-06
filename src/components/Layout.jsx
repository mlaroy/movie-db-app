import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper flex flex-col bg-gradient-to-br from-slate-950 to-slate-800 text-slate-50 min-h-screen">
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout
