import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header className="bg-red-600">
            <nav className='flex'>
                <div className='container mx-auto flex justify-between'>
                    <NavLink to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text4xl font-bold cursive tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100">
                        About
                    </NavLink>
                    <NavLink to="/post" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100">
                        Post
                    </NavLink>
                    <NavLink to="/project" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100">
                        Projects
                    </NavLink>
                </div>
                </nav>
    </header>
  )
}

export default NavBar