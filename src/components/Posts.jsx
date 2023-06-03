import React from 'react'
import ferrari from '../assets/ferrari.jpg'
import {format} from "date-fns"
import { Link } from 'react-router-dom'

export const Posts = ({_id,title,summary,cover,content,createdAt,author}) => {
  return (
    <div className="blogpost">
      <div className="blogimg">
        <Link to={`/postblog/${_id}`}>
          <img src={'http://localhost:4000/'+cover} />
        </Link>
      </div>
      <div className="blogtext">
      <Link to={`/postblog/${_id}`}>
      <h2>{title}</h2>
      </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{format(new Date(createdAt), 'd MMM yyyy, HH:mm')}</time>
        </p>
      <p className="summary">{summary}</p>
      </div>
    </div>
  )
}
