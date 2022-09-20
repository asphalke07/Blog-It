import React from 'react'

const Bloglist = ({blogs,title,handledelete}) => {
    //taking destructered componenets as props and delete function as props

  return (
    <div className="blog-list">
        <h1>{title}</h1>

        {blogs.map(function(blog){
        // JS MAP function always returns a value
            return(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button onClick={()=>{handledelete(blog.id)}}>Delete blog</button>
            </div>
            )
        })};

    </div>
  )
}

export default Bloglist