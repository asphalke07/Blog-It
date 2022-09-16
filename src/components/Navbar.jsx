import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>Blog-it</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create" style={{
                color:"white",
                backgroundColor:"#f1356d",
                borderRadius:"8px"
                }}>New Blog</a>
        </div>
    </div>
  )
}

export default Navbar