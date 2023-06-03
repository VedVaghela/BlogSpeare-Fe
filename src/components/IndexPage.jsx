import React, { useEffect, useState } from 'react'
import {Posts} from './Posts'

export const IndexPage = () => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:4000/postblog').then(response => {
        response.json().then(posts =>{
          setPosts(posts)
        })
      })
  },[])
  return (
    <>
    {posts.length > 0 && posts.map(post => (
      <Posts {...post} />
    ))}
    </>
  )
}
