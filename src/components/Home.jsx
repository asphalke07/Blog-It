import React from 'react'
import { useState } from 'react'

const Home = () => {
  const [blogs,setBlogs]=useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Akshay', id: 1 },
    { title: 'Using React JS', body: 'lorem ipsum...', author: 'Shubham', id: 2 },
    { title: 'Web dev new app', body: 'lorem ipsum...', author: 'Phalke', id: 3 }
  ]);

  return (
    <div className="home">
      {blogs.map(function(blog){
        // JS MAP function always returns a value
        return(
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Home