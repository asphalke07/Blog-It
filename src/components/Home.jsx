import React from 'react';
import { useState } from 'react';
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs,setBlogs]=useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Akshay', id: 1 },
    { title: 'Using React JS', body: 'lorem ipsum...', author: 'Shubham', id: 2 },
    { title: 'Web dev new app', body: 'lorem ipsum...', author: 'Phalke', id: 3 }
  ]);

  function handledelete(id){
    const newblogs=blogs.filter((blog)=>blog.id !== id);
    setBlogs(newblogs);
  }

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="My blogs" handledelete={handledelete}/>
    </div>
  )
}

export default Home