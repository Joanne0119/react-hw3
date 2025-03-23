import React from 'react'
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="bg-base-100 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Logo</Link>
      </div>
    </nav>
  )
}

export default Nav
