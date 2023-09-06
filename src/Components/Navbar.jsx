import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav id="topnav" className='d-flex gap-2 justify-content-center mt-2'>
          <div className='border p-2'>
          <a className="nav-link" href="/">Home</a>
          </div>
          <div className='border p-2'>
          <a className="nav-link" href="/add">Add Blog</a> 
          </div>
      </nav>
    </div>  
  )
}

export default Navbar